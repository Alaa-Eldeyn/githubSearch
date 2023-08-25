const FollowerRow = ({ avatar_url, html_url, login }) => {
  return (
    <div className="flex mb-3">
      <img
        src={avatar_url}
        alt={login || "Follower"}
        className=" w-12 rounded-full max-w-full mr-3 outline outline-1 outline-teal-700"
      />
      <div className="flex flex-col justify-center">
        <strong className=" tracking-wide">{login}</strong>
        <a href={html_url} className=" text-gray-500 font-light">
          {html_url}
        </a>
      </div>
    </div>
  );
};

export default FollowerRow;
