import { MenuIcon } from "./icons";

const Header = () => {
  return (
    <header className="flex items-center gap-x-4 px-6 py-4 md:ml-20 ">
      <button className="md:hidden">
        <MenuIcon />
      </button>
      <p className="grow font-bold md:text-xl">Inicio</p>
      <button className="bg-red h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500"></button>
    </header>
  );
};
export default Header;
