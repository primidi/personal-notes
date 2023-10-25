import React from 'react';
import { showFormattedDate } from '../utils';

export default function Item(props) {
  const {
    id,
    title,
    createdAt,
    body,
    archived,
    onDelete,
    onArchive,
    onActivate,
  } = props;

  const onDeleteNote = () => {
    onDelete(id);
  };

  const onArchiveNote = () => {
    onArchive(id);
  };

  const onActivateNote = () => {
    onActivate(id);
  };

  return (
    <article className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button
          type="button"
          className="note-item__delete-button"
          onClick={onDeleteNote}
        >
          Delete
        </button>
        <button
          type="button"
          className="note-item__archive-button"
          onClick={archived ? onActivateNote : onArchiveNote}
        >
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </article>
  );
}
