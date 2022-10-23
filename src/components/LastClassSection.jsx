import ClockIcon from "./icons/ClockIcon";
import RightArrowIcon from "./icons/RightArrowIcon";

const LastClassSection = () => {
  return (
    <section className="mt-12 md:mt-4 md:px-6">
      <div className="flex flex-col overflow-hidden bg-white shadow-lg md:flex-row md:rounded-xl">
        <div className="flex h-64 w-full flex-col items-center justify-center bg-slate-900 text-center md:h-44 md:w-96">
          <p className="text-md bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text font-bold text-transparent">
            Introducción a la programación
          </p>
          <p className="text-lg font-bold text-white">
            1.1 Historia de la programación
          </p>
        </div>
        <div className="container mx-auto mt-2 flex flex-col justify-between p-6 px-4 pt-2">
          <div>
            <p className=" text-xs font-bold uppercase text-gray-400">
              Introducción a la programación
            </p>
            <p className="mt-2 font-bold">
              Programación. Variables y constantes
            </p>
          </div>
          <div className=" flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-md   flex items-center font-semibold text-gray-400">
              <p>Video</p>
              <div className="ml-4 flex items-center gap-1">
                <ClockIcon stroke="#9ca3af" className="h-5 w-5" />
                <p>16min</p>
              </div>
            </div>
            <button className=" mt-3 flex w-full items-center justify-center gap-x-1 rounded-md bg-black py-2 text-sm font-bold text-white md:mt-0 md:w-40">
              Continuar lección{" "}
              <span>
                <RightArrowIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LastClassSection;
