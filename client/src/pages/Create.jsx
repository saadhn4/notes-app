import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const note = {
    title,
    content,
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post("http://localhost:5009/api/notes/add", note);
      alert("Note posted");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h2 className="text-3xl font-bold mb-6">Create a New Note 📝</h2>
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Enter Title:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Your title"
              required
              className="w-full border border-black rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Enter Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Write your note..."
              className="w-full border border-black rounded-xl p-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-400 text-white py-3 rounded-xl font-semibold hover:bg-red-500 transition duration-200"
          >
            Submit Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
