import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NotesDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(
    `http://localhost:5009/api/notes/get/${id}`
  );

  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5009/api/notes/delete/${id}`);
    alert("Note deleted!!");
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {isLoading && <div>Loading..</div>}
      {data && (
        <div className="shadow-lg w-2xl mx-4 sm:mx-6 p-3 bg-gray-50 rounded-lg flex flex-col justify-center items-center">
          <h2 className="font-bold m-2 underline">{data.movie.title}</h2>
          <p className="text-lg">{data.movie.content}</p>
        </div>
      )}
      <button
        onClick={handleDelete}
        className="bg-blue-500 text-white rounded-lg p-2 cursor-pointer mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default NotesDetails;
