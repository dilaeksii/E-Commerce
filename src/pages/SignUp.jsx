import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUp = () => {
  const {
    register,
    formState: { errors, isSubmitted, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({ mode: "onChange", defaultValues: { role_id: "3" } });

  let history = useHistory();

  const password = watch("password");
  const role = watch("role_id");

  const onSubmit = async (data) => {
    const base = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    const payload =
      data.role_id === 2
        ? {
            ...base,
            store: {
              name: data.storename,
              phone: data.phone,
              tax_no: data.tax_no,
              bank_account: data.bank_account,
            },
          }
        : base;

    await axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", null, {
        params: payload,
      })
      .then((response) => {
        toast.success("Kayıt işlemi başarılı!");
        setTimeout(() => {
          history.push("/home");
        }, 2000);
      })
      .catch((error) => {
        toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz!");
        console.log(error.response?.data);
        reset({
          name: "",
          email: "",
          password: "",
          role_id: 3,
        });
      });
  };

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#EAF6FF] to-[#23A6F0] w-full min-h-screen max-sm:py-10 max-sm:px-3">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl overflow-hidden rounded-lg shadow">
        <div className="w-1/2 bg-white p-10 max-sm:w-full">
          <div className="p-20  space-y-4 max-sm:px-0">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">
              Create an account
            </h1>
            <form
              className="space-y-4"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Name Surname
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="abcd"
                  {...register("name", {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Name should be at least 3 characters long",
                    },
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required!</p>
                )}
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.",
                    },
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required!</p>
                )}
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match!",
                  })}
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-500">Please confirm your password!</p>
                )}
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="text-sm">
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("role_id")}
                >
                  {roles.map((role) =>
                    role.id === 3 ? (
                      <option key={role.id} value={role.id} selected>
                        {role.name}
                      </option>
                    ) : (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ),
                  )}
                </select>
              </div>
              {role === "2" && (
                <>
                  <div>
                    <label
                      htmlFor="storename"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Store Name
                    </label>
                    <input
                      type="text"
                      name="storename"
                      id="storename"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="abcd"
                      {...register("storename", {
                        required: true,
                        minLength: {
                          value: 3,
                          message:
                            "Store name should be at least 3 characters long",
                        },
                      })}
                      aria-invalid={errors.storename ? "true" : "false"}
                    />
                    {errors.storename?.type === "required" && (
                      <p className="text-red-500">Store name is required!</p>
                    )}
                    {errors.storename && (
                      <p className="text-red-500">{errors.storename.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="abcd"
                      {...register("phone", {
                        required: true,
                        pattern: {
                          value: /^(\+90|0)?5\d{9}$/,
                          message: "Please enter a valid phone number!",
                        },
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone?.type === "required" && (
                      <p className="text-red-500">Phone is required!</p>
                    )}
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="tax"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Tax Number
                    </label>
                    <input
                      type="text"
                      name="tax"
                      id="tax"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="abcd"
                      {...register("tax_no", {
                        required: true,
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message:
                            "Please enter a valid tax number in the format TXXXXVXXXXXX.",
                        },
                      })}
                      aria-invalid={errors.tax_no ? "true" : "false"}
                    />
                    {errors.tax_no?.type === "required" && (
                      <p className="text-red-500">Tax number is required!</p>
                    )}
                    {errors.tax_no && (
                      <p className="text-red-500">{errors.tax_no.message}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="bank_account"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Bank Account
                    </label>
                    <input
                      type="text"
                      name="bank_account"
                      id="bank_account"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="abcd"
                      {...register("bank_account", {
                        required: true,
                        pattern: {
                          value:
                            /TR[a-zA-Z0-9]{2}\s?([0-9]{4}\s?){1}([0-9]{1})([a-zA-Z0-9]{3}\s?)([a-zA-Z0-9]{4}\s?){3}([a-zA-Z0-9]{2})\s?/,
                          message: "Please enter a valid IBAN.",
                        },
                      })}
                      aria-invalid={errors.bank_account ? "true" : "false"}
                    />
                    {errors.bank_account?.type === "required" && (
                      <p className="text-red-500">Bank account is required!</p>
                    )}
                    {errors.bank_account && (
                      <p className="text-red-500">
                        {errors.bank_account.message}
                      </p>
                    )}
                  </div>
                </>
              )}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[[#23A6F0]]"
                    {...register("terms", {
                      required: "You must accept the Terms and Conditions",
                    })}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-900">
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:text-[#23A6F0]"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                  {errors.terms && (
                    <p className="text-red-500">{errors.terms.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="flex items-center w-full bg-[#23A6F0] text-[#FFFFFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={!isValid}
              >
                Create an Account
                {isSubmitted && (
                  <svg
                    aria-hidden="false"
                    className="w-4 h-4 animate-spin ml-2 text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                      className="opacity-20"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                      className="opacity-90"
                    />
                  </svg>
                )}
              </button>
              <p className="text-sm font-light text-gray-900">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:text-[#23A6F0]"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
        <div
          className="w-1/2 bg-[url(/images/signup.jpeg)] bg-center bg-cover bg-no-repeat max-sm:hidden"
        />
      </div>
    </section>
  );
};
