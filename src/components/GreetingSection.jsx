const GreetingSection = () => {
  return (
    <section className="pt-12">
      <p className="px-6 text-xl font-bold md:text-3xl">
        👋 ¡Hola{" "}
        <span className=" bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent ">
          Renzo Giancarlo
        </span>
        , continúa por donde lo habías dejado!
      </p>
    </section>
  );
};
export default GreetingSection;
