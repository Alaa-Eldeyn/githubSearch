import { useGlobalContext } from "../Context/Context";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FaUsers, FaUserPlus, FaCode } from "react-icons/fa";
import InfoCard from "./InfoCard";

const Info = () => {
  const { githubUser } = useGlobalContext();

  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      text: "Repos",
      value: public_repos,
      bg_color: "#fce7f3",
      icon_color: "#be185d",
      icon: <RiGitRepositoryLine />,
    },
    {
      id: 2,
      text: "Followers",
      value: followers,
      bg_color: "#ccfbf1",
      icon_color: "#0f766e",
      icon: <FaUsers />,
    },
    {
      id: 3,
      text: "Following",
      value: following,
      bg_color: "#f3e8ff",
      icon_color: "#7e22ce",
      icon: <FaUserPlus />,
    },
    {
      id: 4,
      text: "Gists",
      value: public_gists,
      bg_color: "#ffedd5",
      icon_color: "#c2410c",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="container mx-auto mb-10">
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          return <InfoCard key={item.id} {...item} />
        })}
      </div>
    </section>
  );
};

export default Info;
