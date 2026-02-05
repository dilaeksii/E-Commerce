import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onChange", defaultValues: { role_id: 3 } });

  const password = watch("password");
  const role = watch("role_id");

  const onSubmit = (data) => {
     const base = {
    name: data.name,
    email: data.email,
    password: data.password,
    role_id: data.role_id,
  };

  const payload =
    data.role_id === 2 // store id=2 ise
      ? {
          ...base,
          store_name: data.storename,   // backend hangi key istiyor? (storename değilse!)
          phone: data.phone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        }
      : base; 

    axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", payload) //postta hata var
      .then((response) => console.log("Post isteği başarılı"))
      .catch((error) => {
        console.log("backend:", error.response?.data);
        console.log("sent:", error.config?.data);
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
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="max-w-md bg-white rounded-lg shadow border bg-gray-800 border-gray-700">
          <div className="p-20  space-y-4">
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
                  {...register("role_id", { valueAsNumber: true })}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              {role === 2 && (
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
                className="w-full bg-[#23A6F0] text-[#FFFFFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
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
      </div>
    </section>
  );
};

