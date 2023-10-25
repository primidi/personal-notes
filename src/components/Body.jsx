import React from 'react';
import Form from './Form';
import Lists from './Lists';

export default function Body(props) {
  const { notes, onSubmit, onDeleteNote, onArchiveNote, onActivateNote } =
    props;
  return (
    <main className="note-app__body">
      <section className="note-input">
        <h2>Buat Catatan</h2>
        <Form length={notes.length} onSubmit={onSubmit} />
      </section>
      <Lists
        notes={notes}
        onDeleteNote={onDeleteNote}
        onArchiveNote={onArchiveNote}
        onActivateNote={onActivateNote}
      />
    </main>
  );
}
