import NoteList from "../NoteList";
import useFetch from "../useFetch";

const Home = () => {
  const { data: notes, isLoading } = useFetch(
    "http://localhost:5009/api/notes/getall"
  );

  return (
    <>
      {isLoading && (
        <div className="text-3xl flex justify-center items-center h-screen">
          Loading...
        </div>
      )}
      {notes && <NoteList notes={notes.movies} title="All notes" />}
    </>
  );
};

export default Home;
