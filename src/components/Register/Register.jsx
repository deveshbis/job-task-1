import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const { createUser, updateUserProfile } = useAuth();

    const navigate = useNavigate();
    const from = "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;

        //create user and update profile
        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, image)
                    .then(() => {
                        navigate(from);
                    });
            });
    };

    // const onSubmit = (data) => {
    //     const { email, password } = data;
    //     createUser(email, password)
    //         .then(result => {
    //             console.log(result);

    //         })
    // }

    return (
        <div>
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(https://readymadeui.com/images/product10.webp)" }}>
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">

                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-1/2">
                        <div className="flex-1">
                            <div className="text-center">
                                <div className="flex justify-center mx-auto">
                                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                                </div>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-8">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input type="text" name="name" id="name" placeholder="full name"
                                            {...register("fullName", { required: true })}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        {errors.fullName && <span className="text-red-600">This field is required</span>}
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="example@example.com"
                                            {...register("email", { required: true })}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        {errors.email && <span className="text-red-600">This field is required</span>}
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="iamge" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Image</label>
                                        <input type="text" name="image" id="image" placeholder="Your image"
                                            {...register("image", { required: true })}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        {/* {errors.image && <span className="text-red-600">This field is required</span>} */}
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Your Password"
                                            {...register("password", { required: true })}
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        {errors.password && <span className="text-red-600">This field is required</span>}
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign Up
                                        </button>
                                    </div>

                                </form>

                                <p className="mt-6 text-sm text-center text-gray-400">Do not have an account yet? <Link to='/login' className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign In.</Link>  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;