const MethodSection = () => {
  return (
    <section className="mx-6 mt-12">
      <h2 className="font-bold md:text-lg">El método OpenBootcamp</h2>
      <p className="mt-2 text-sm md:text-base">
        Hemos diseñado esta hoja de ruta para que tu experiencia de aprendizaje
        sea la mejor y no te pierdas a lo largo de tu formación.
      </p>
      <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="font-bold text-gray-400">FULLSTACK</p>
          <p className="text-sm font-semibold">0%</p>
        </div>
        <div className="mt-4 flex flex-col gap-y-5">
          <div className="flex items-center gap-x-5">
            <div className="flex h-8 w-8 items-center justify-center  rounded-full bg-gray-200">
              <p className="font-semibold text-gray-500/50">1</p>
            </div>
            <div className="flex w-full gap-x-4 rounded-md bg-gray-200 p-2">
              <img
                src="./src/assets/programing.svg"
                alt="programing"
                className="h-14 w-14 rounded-md bg-white/60"
              />
              <div className="flex grow flex-col ">
                <p className=" font-bold">Introducción a la programación</p>
                <div className="flex flex-col items-center text-gray-500 md:flex-row md:gap-x-1">
                  <p className="text-xs ">11 módulos</p>
                  <p className="hidden md:block">|</p>
                  <p className="text-xs ">9h 36min</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex items-center gap-x-5">
            <div className="flex h-8 w-8 items-center justify-center  rounded-full bg-gray-200">
              <p className="font-semibold text-gray-500/50">2</p>
            </div>
            <div className="flex w-full gap-x-4 rounded-md bg-gray-200 p-2">
              <img
                src="./src/assets/python.svg"
                alt="programing"
                className="h-14 w-14 rounded-md bg-white/60"
              />
              <div className="flex grow flex-col ">
                <p className=" font-bold">Python</p>
                <div className="flex flex-col items-center text-gray-500 md:flex-row md:gap-x-1">
                  <p className="text-xs ">12 módulos</p>
                  <p className="hidden md:block">|</p>
                  <p className="text-xs ">13h 20min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="mt-4 w-full rounded-md bg-gray-300/70 py-2 text-center font-bold">
          Ver 8 cursos restantes
        </button>
      </div>
    </section>
  );
};
export default MethodSection;
