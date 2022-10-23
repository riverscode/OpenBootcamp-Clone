import ClockIcon from "./icons/ClockIcon";
import ListIcon from "./icons/ListIcon";

const CourseCard = ({ level, image, name, modules, hours }) => {
  return (
    <div className="mt-6 flex ">
      <div className="relative w-60 overflow-hidden rounded-2xl bg-white shadow-md">
        <p className="absolute top-5 left-4 rounded-2xl bg-black py-1 px-2 font-bold text-white">
          {level}
        </p>
        <div className="h-36 overflow-hidden ">
          <img
            src={`./src/assets/${image}.png`}
            alt={name}
            className="h-full w-full bg-center object-cover"
          />
        </div>
        <div className="p-4">
          <p className="truncate font-bold">{name}</p>
          <div className="mt-2 flex items-center gap-x-2 text-sm font-bold text-gray-400">
            <ListIcon stroke="#9ca3af" className="h-5 w-5" />
            <p>{modules} módulos</p>
            <ClockIcon stroke="#9ca3af" className="h-5 w-5" />
            <p>{hours}h</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
