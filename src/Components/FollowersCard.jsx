import { useGlobalContext } from "../Context/Context";
import FollowerRow from "./FollowerRow";

const FollowersCard = () => {
  const { followers, login } = useGlobalContext();

  if (followers.length === 0) {
    return (
      <div className="rounded shadow-sm">
        <p className="bg-white py-2 px-5 text-gray-500 inline-block rounded-t tracking-wider">
          Followers
        </p>
        <article className="element-center gap-5 flex-col gag-5 bg-white w-full h-[280px] overflow-y-auto overflow-x-hidden rounded rounded-tl-none p-6">
          <p className="text-center text-lg">This user has no followers yet</p>
          <p>
            <a
              href={`https://github.com/${login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border font-semibold text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white transition-colors duration-300 h-fit py-2 px-5"
            >
              Be the first one
            </a>
          </p>
        </article>
      </div>
    );
  }
  return (
    <div className="rounded shadow-sm">
      <p className="bg-white py-2 px-5 text-gray-500 inline-block rounded-t tracking-wider">
        Followers
      </p>
      <article className=" bg-white w-full h-[280px] overflow-y-auto overflow-x-hidden rounded rounded-tl-none p-6">
        {followers.map((member) => {
          return <FollowerRow key={member.id} {...member} />;
        })}
      </article>
    </div>
  );
};

export default FollowersCard;
