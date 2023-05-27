import React, { useContext, useEffect, useRef, useState } from 'react';
import img from '../../../assets/contact/authentication2 1.png'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProvider';

const SignIn = () => {
    const [error, setError] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)

        const email = data.email;
        const password = data.password;
        const confirm = data.confirm;

        if (password != confirm) {
            setError('Password is incorrect')
        }
        createUser(data.email, data.password, data.confirm)
            .then(result => {
                const user = result.user;
                console.log(user);
            }).catch(error => {
                console.log(error.message);
            })

    };

    return (
        <>

            <Helmet>
                <title>Bistro | sign up</title>
            </Helmet>


            <div className='lg:flex   mt-10'>
                <div className="mx-auto w-1/2 text-right">
                    <div className=" flex-col ">
                        <div className="text-center ">
                            <h1 className="lg:text-5xl text-3xl font-bold">Sign Up now!</h1>

                        </div>
                        <div className='flex justify-center mt-7'>
                            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                        {errors.name && <span className='text-red-500 mt-2'>This name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email"  {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                                        {errors.email && <span className='text-red-500 mt-2'>Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password"  {...register("password", {
                                            required: true,
                                            maxLength: 20,
                                            minLength: 6
                                        })} name='password' placeholder="Password" className="input input-bordered" />

                                        {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Password must be 6 char</span>}

                                        {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Password must be under 20 char</span>}

                                        {errors.password?.type == 'required' && <span className='text-red-500 mt-2'>Password is required</span>}




                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Confirm password</span>


                                        </label>
                                        <input type="password"  {...register("confirm", { required: true })} placeholder="Type here" className="input input-bordered" />


                                    </div>



                                    <div>
                                        <h1 className='text-red-500'>{error}</h1>
                                    </div>
                                    <div className="form-control mt-6">

                                        <input className="btn btn-outline  border-0 border-b-4 hover:bg-[#D1A054] text-white border-none bg-[#D1A054] bg-opacity-70  " type="submit" value='Sign up' />
                                    </div>
                                    <Link className='mx-auto text-[#D1A054] flex justify-center my-8 ' to='/login'><button className=''>Already registered?  <span className='hover:underline '>Go to log in</span> </button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img className='w-1/2 mx-auto' src={img} alt="" />


            </div>

            <Link className='mx-auto flex justify-center my-8 ' to='/'><button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-500 text-black hover:bg-yellow-500 hover:border-yellow-500'>Go back Home</button></Link>


        </>
    );
};

export default SignIn;