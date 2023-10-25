import React from 'react';
import Item from './Item';
import { showFormattedDate } from '../utils';

export default function Lists(props) {
  const { notes, onDeleteNote, onArchiveNote, onActivateNote } = props;

  return (
    <>
      <h2>Catatan Aktif</h2>
      {notes.filter((note) => !note.archived).length ? (
        <section className="notes-list">
          {notes
            .filter((note) => !note.archived)
            .map((note) => (
              <Item
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                body={note.body}
                archived={note.archived}
                onDelete={onDeleteNote}
                onArchive={onArchiveNote}
                onActivate={null}
              />
            ))}
        </section>
      ) : (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
      <h2>Arsip</h2>
      {notes.filter((note) => note.archived).length ? (
        <section className="notes-list">
          {notes
            .filter((note) => note.archived)
            .map((note) => (
              <Item
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                body={note.body}
                archived={note.archived}
                onDelete={onDeleteNote}
                onArchive={null}
                onActivate={onActivateNote}
              />
            ))}
        </section>
      ) : (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
    </>
  );
}
