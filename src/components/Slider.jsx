import HomeIcon from "./icons/HomeIcon";
import JobIcon from "./icons/JobIcon";
import Logo from "./icons/LogoIcon";
import PathIcon from "./icons/PathIcon";
import CourseIcon from "./icons/CourseIcon";
import CertificateIcon from "./icons/CertificateIcon";
import ForumIcon from "./icons/ForumIcon";
import NewsIcon from "./icons/NewsIcon";
import CommunityIcon from "./icons/CommunityIcon";
import FavoriteIcon from "./icons/FavoriteIcon";

const Slider = () => {
  return (
    <div className="group/slider top-0 left-0 z-50 hidden h-screen w-20 overflow-hidden bg-white transition-all duration-300 hover:w-60 md:fixed md:flex md:flex-col">
      <div className="flex items-center  py-5 pl-6">
        <div className="mr-3 h-9 w-9">
          <Logo className=" h-9 w-9" />
        </div>
        <p className="hidden text-lg font-bold leading-4 transition-all duration-500 group-hover/slider:block">
          Open <br /> BootCamp
        </p>
      </div>
      <div className="mt-16 flex w-full  cursor-pointer flex-col text-gray-400 transition-all duration-300">
        <div className="group flex w-full py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <HomeIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Inicio
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <PathIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Ruta
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <JobIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Empleos
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <CourseIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Cursos
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <CertificateIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Certificados
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <ForumIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Foros
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <NewsIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Novedades
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <CommunityIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Comunidad
          </p>
        </div>
        <div className="flex py-4 pl-6 transition-colors hover:text-teal-500">
          <div className="mr-3 h-6 w-6">
            <FavoriteIcon className="h-6 w-6" />
          </div>
          <p className="hidden transition-all duration-500 group-hover/slider:block group-hover:text-teal-500">
            Favoritos
          </p>
        </div>
      </div>
    </div>
  );
};
export default Slider;
