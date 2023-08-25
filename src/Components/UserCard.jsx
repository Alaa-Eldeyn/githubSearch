import { useGlobalContext } from "../Context/Context";
import { BiSolidBusiness } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";

const UserCard = () => {
  const { githubUser } = useGlobalContext();
  const { avatar_url, name, login, bio, company, location, blog } =
    githubUser;
  return (
    <div className="rounded shadow-sm">
      <p className="bg-white py-2 px-5 text-gray-500 inline-block rounded-t tracking-wider">
        User
      </p>
      <article className=" bg-white w-full h-[280px] rounded rounded-tl-none p-6">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img
              src={avatar_url}
              alt={name || "Alaa-Eldeyn"}
              className=" w-16 rounded-full max-w-full mr-3 outline outline-1 outline-teal-700"
            />
            <div className="flex flex-col justify-center">
              <strong className=" tracking-wide">{name}</strong>
              <p className=" text-gray-500 font-light">@{login}</p>
            </div>
          </div>
          <a
            href={`https://github.com/${login}`}
            className=" rounded-full border font-semibold text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-300 h-fit py-2 px-5"
          >
            Follow
          </a>
        </div>
        <div>
          <p className="text-gray-500 py-4">{bio}</p>
          <ul className=" text-gray-600">
            <li className="flex items-center gap-3 mb-3">
              <BiSolidBusiness /> {company || "Still Studying"}
            </li>
            <li className="flex items-center gap-3 mb-3">
              <HiLocationMarker /> {location}
            </li>
            <li className="flex items-center gap-3 mb-3">
              <AiOutlineLink />{" "}
              <a
                className=" text-cyan-600 hover:text-cyan-900 transition-colors duration-200"
                href={blog}
              >
                {blog}
              </a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default UserCard;
