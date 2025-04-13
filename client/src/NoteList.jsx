import React from "react";
import { Link } from "react-router-dom";

const NoteList = ({ notes, title }) => {
  return (
    <>
      <h2 className="text-3xl text-center m-8">{title}</h2>
      <div className="note-list grid sm:grid-cols-1 grid-cols-2">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note flex flex-col justify-center items-center p-4 my-2 mx-4 bg-white shadow-sm rounded-lg"
          >
            <Link to={`/notes/${note._id}`}>
              <p>Title: {note.title}</p>
              <p>{note.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default NoteList;
