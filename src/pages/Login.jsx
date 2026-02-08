import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const Login = () => {

    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({ mode: "onChange" });

      const onSubmit = (data) => console.log(data);

        
  return (
    <section class="bg-gradient-to-br from-[#EAF6FF] to-[#23A6F0] ">
      <div class="mx-auto flex min-h-screen w-full max-w-6xl overflow-hidden rounded-lg shadow">
        <div class="w-1/2 bg-white p-10 max-sm:w-full max-sm:mx-3">
          <div class="p-6 space-y-4 max-sm:px-0">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 ">
              Sign in to your account
            </h1>
            <form class="space-y-4" action="#" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email address!",
                    },
                  })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required!</p>
                )}
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-600 focus:ring-primary-600"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="remember" className="text-gray-500">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:text-[#23A6F0]"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary-600 hover:text-[#23A6F0]"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div
          className=" w-1/2 bg-[url(/images/login.png)] bg-cover bg-no-repeat bg-contain bg-center max-sm:hidden"
        />
      </div>
    </section>
  );
};
