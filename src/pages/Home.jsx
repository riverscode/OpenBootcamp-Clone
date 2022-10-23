import BestsCourses from "../components/BestsCourses";
import DiscordBanner from "../components/DiscordBanner";
import GreetingSection from "../components/GreetingSection";
import Header from "../components/Header";
import LastClassSection from "../components/LastClassSection";
import MethodSection from "../components/MethodSection";
import PerfilProgress from "../components/PerfilProgress";
import PhaseSection from "../components/PhaseSection";
import Slider from "../components/Slider";
const Home = () => {
  return (
    <div className="bg-gray-100 pb-8 ">
      <Slider />

      <Header />
      <main className="md:ml-20">
        <div className="grid-cols-8 xl:grid">
          <div className="xl:col-span-5">
            <GreetingSection />
            <LastClassSection />
          </div>
          <PerfilProgress />
        </div>
        <div className="xl:grid xl:grid-cols-8">
          <div className="xl:order-last xl:col-span-3">
            <DiscordBanner />
            <MethodSection />
          </div>

          <div className="flex-col-reverse xl:col-span-5 xl:flex">
            <PhaseSection />
            <BestsCourses />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
