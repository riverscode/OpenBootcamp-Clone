import Logo from "../components/icons/LogoIcon";
import OpenEyeIcon from "../components/icons/OpenEyeIcon";

const Login = () => {
  return (
    <div className="h-screen ">
      <div className="fixed top-3 left-3">
        <div className="flex items-center gap-3 text-gray-900">
          <Logo className="h-10 w-10" />
          <p className=" font-bold leading-4">
            Open <br /> Bootcamp
          </p>
        </div>
      </div>
      <div className="flex h-full items-center justify-center ">
        <div className=" w-4/5">
          <h1 className="text-xl font-bold">¡Bienvenido/a!</h1>
          <form className="mt-4">
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="text"
                placeholder="Introduce tu email"
                className="mt-1 rounded-md bg-gray-100 px-3 py-1"
              />
            </div>
            <div className=" relative mt-4 flex flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Contraseña
              </label>
              <input
                type="text"
                placeholder="Introduce tu contraseña"
                className="mt-1 rounded-md bg-gray-100 px-3 py-1"
              />
              <button className="absolute top-1/2 right-2 ">
                <OpenEyeIcon className="right-2 h-5 w-5 text-gray-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
