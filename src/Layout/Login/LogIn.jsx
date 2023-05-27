import React, { useContext, useEffect, useRef, useState } from 'react';
import img from '../../assets/contact/authentication2 1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [disabled, setDisabled] = useState(true);
    const { loading, signIn } = useContext(AuthContext)

    // const validateRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handlerLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    }



    const handlerValidate = (e) => {
        const Captcha_value = e.target.value;
        ;
        // console.log(Captcha_value);

        if (validateCaptcha(Captcha_value)) {
            setDisabled(false);


        }
        else {
            setDisabled(true);
        }


    }
    return (
        <>


            <div className='lg:flex  mt-10'>
                <img className='w-1/2 mx-auto' src={img} alt="" />

                <div className="mx-auto w-1/2 text-right">
                    <div className=" flex-col ">
                        <div className="text-center ">
                            <h1 className="lg:text-5xl text-3xl font-bold">Login now!</h1>

                        </div>
                        <div className='flex justify-center mt-7'>
                            <form onSubmit={handlerLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <input onBlur={handlerValidate} type="text" placeholder="Type here" className="input input-bordered" />


                                    </div>
                                    <div className="form-control mt-6">

                                        <input className="btn btn-outline  border-0 border-b-4 hover:bg-[#D1A054] text-white border-none bg-[#D1A054] bg-opacity-70  " type="submit" value='log in' />
                                    </div>

                                    <Link className='mx-auto hover:underline text-[#D1A054] flex justify-center my-8 ' to='/signIn'><button className=''>New here? Create a New Account </button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Link className='mx-auto flex justify-center my-8 ' to='/'><button className='hover:underline btn btn-outline border-0 border-b-4 border-yellow-500 text-black hover:bg-yellow-500 hover:border-yellow-500'>Go back Home</button></Link>

        </>
    );
};

export default LogIn;