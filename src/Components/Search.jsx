import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../Context/Context";

const Search = () => {
  const [search, setSearch] = useState("");
  const { checkRequest, requests, error, searchUser } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    checkRequest();
    if (search) {
      searchUser(search);
    }
  };
  return (
    <>
      {error.show && (
        <div className="container text-red-500 mb-3">{error.msg}</div>
      )}
      <section className="container mb-5 items-center col-gap-5 grid grid-cols-1 md:grid-cols-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-grow items-center col-span-3 bg-white rounded px-4 py-2 shadow-sm"
        >
          <FaSearch className="text-gray-300" />
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-1 outline-gray-100 py-1 px-2 mx-2"
            placeholder="alaa-eldeyn"
          />
          <button
            type="submit"
            className="rounded border font-semibold text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-300 py-1 px-5"
          >
            Search
          </button>
        </form>
        <p className="text-center text-lg lg:text-2xl text-slate-400 mt-5 md:mt-0">
          Requests: {requests} / 60
        </p>
      </section>
    </>
  );
};

export default Search;
