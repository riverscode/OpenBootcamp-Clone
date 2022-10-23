import DiscordIcon from "./icons/DiscordIcon";

const DiscordBanner = () => {
  return (
    <section className="relative mt-6 overflow-hidden bg-blue-900/90 md:mx-6 md:rounded-2xl">
      <img
        className="absolute w-full  mix-blend-overlay"
        src="./src/assets/DiscordWidgetBG.png"
        alt="Discord Community"
      />
      <div className="z-50 flex items-center  justify-center gap-x-8 py-6 md:py-7">
        <DiscordIcon className="h-10 w-10" />
        <p className=" uppercase text-white">
          Aprende y Comparte en <span className="font-bold">comunidad</span>
        </p>
      </div>
    </section>
  );
};
export default DiscordBanner;
