import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className=" bg-teal-100 h-screen grid place-items-center">
      <div className="container">
        <div className="flex-col text-center element-center">
          <h1 className="font-bold text-teal-950 text-[8rem] mb-[-2rem]">
            404
          </h1>
          <span className="font-bold text-lg sm:text-2xl md:text-3xl">
            Sorry, the page not found
          </span>
          <Link to={"/"} className="btn mt-9">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
