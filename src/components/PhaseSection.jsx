const PhaseSection = () => {
  return (
    <section className="mx-6">
      <div className=" mt-20">
        <h3 className="font-bold md:text-lg">
          ¿En qué fase de OpenBootcamp estás?
        </h3>
        <p className="mt-2 text-sm md:text-base">
          Open Bootcamp ha nacido para reinventar la formación especializada.
          Nuestra misión es que puedas tener acceso a la formación tecnológica
          de máxima calidad sin coste alguno. Con nuestra formación, podrás
          acceder a empleos que se ajusten a tus necesidades. Dependiendo del
          momento en el que te encuentres, podrás elegir entre nuestras dos
          fases:
        </p>
      </div>

      <div className="mt-12 flex ">
        <div className=" flex gap-x-8 overflow-x-auto pb-6">
          <div className="flex w-80 shrink-0  overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-br from-blue-500 to-green-400">
            <div className="bg-white p-8">
              <p className="bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-2xl font-black text-transparent">
                1
              </p>
              <p className="mt-3 text-lg uppercase">
                Fase <span className="font-bold">Incubación</span>
              </p>
              <p className="text-sm">
                En este nivel te introduciremos y prepararemos académicamente
                para ser desarrollador.
              </p>
            </div>
          </div>

          <div className="flex w-80 shrink-0 overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-b from-blue-500 to-green-400">
            <div className="bg-white p-8">
              <p className="bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-2xl font-black text-transparent">
                2
              </p>
              <p className="mt-3 text-lg uppercase">
                Fase <span className="font-bold">Aceleración</span>
              </p>
              <p className="text-sm">
                Una vez alcances este nivel te empezaremos a preparar para las
                ofertas de trabajo.
              </p>
            </div>
          </div>

          <div className=" flex w-80 shrink-0 overflow-hidden rounded-3xl border-2 border-transparent bg-gradient-to-b from-blue-500 to-green-400">
            <div className="bg-white p-8">
              <p className="bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-2xl font-black text-transparent">
                3
              </p>
              <p className="mt-3 text-lg uppercase">
                Fase <span className="font-bold">Laboral</span>
              </p>
              <p className="text-sm">
                Accede a Fase Aceleración para comprobar los requisitos
                necesarios para desbloquear la Fase Laboral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PhaseSection;
