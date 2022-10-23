const PerfilProgress = () => {
  return (
    <section className=" mt-16 bg-black p-6 text-white md:mx-6 md:rounded-3xl xl:col-span-3">
      <div className="flex gap-x-4">
        <div className="rounded-full bg-teal-400/20 text-xl font-black">
          <div className=" flex h-20 w-20 items-center  justify-center ">
            43%
          </div>
        </div>
        <div>
          <p className="text-xl font-bold">Progreso del perfil</p>
          <p className="text-sm">
            Completa la información de tu perfil para optar a mayores ventajas
            como acceso a vacantes, entre otras características.
          </p>
        </div>
      </div>
      <button className="mt-4 w-full rounded-md bg-white py-2 text-center font-bold text-black transition-colors hover:bg-teal-500">
        Completar mi Perfil
      </button>
    </section>
  );
};
export default PerfilProgress;
