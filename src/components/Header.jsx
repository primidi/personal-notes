import React from "react";

export default function Header(props) {
  const { searchText, onChangeSearchText } = props;
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Cari catatan ..."
          value={searchText}
          onChange={onChangeSearchText}
        />
      </div>
    </header>
  );
}
