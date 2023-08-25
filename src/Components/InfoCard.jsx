
const InfoCard = ({ text, value, bg_color, icon_color, icon }) => {
  return (
    <div className="bg-white min-h-[100px] rounded shadow-sm p-5 flex-grow">
      <div className="flex items-center ">
        <div
          className="w-[50px] h-[50px] text-2xl element-center rounded-full"
          style={{ color: icon_color, background: bg_color }}
        >
          {icon}
        </div>
        <div className="text-center flex-grow">
          <strong className="text-3xl">{value}</strong>
          <p className="tracking-wide text-gray-400">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard