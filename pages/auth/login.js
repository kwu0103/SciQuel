import Head from 'next/Head';
import {FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';

export default function login(){
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50'>
            <Head>
                <title>SciQuel</title>
            </Head>

            <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'> 
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                    <div className="w-3/5 p-5">
                        <div className="text-left font-bold">
                            <span className="text-green-500">Sci</span>Quel
                        </div>
                        <div className="py-10">
                            <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to Account</h2>
                            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                            <div className="flex justify-center my-2">
                                <button className="border-2 border-gray-200 rounded-full p-3 mx-1">
                                    <FaGoogle className="text-sm" />
                                </button>
                            </div>
                            <p className="text-gray-400 my-3">or use your email account</p>
                            <div className="flex flex-col items-center mb-3">
                                <div className="bg-gray-100 w-64 p-2 flex items-center">
                                    <FaRegEnvelope className="text-gray-400 m-2"/>
                                    <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                            </div>
                            <div className="flex flex-col items-center mb-3">
                                <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                                    <MdLockOutline className="text-gray-400 m-2"/>
                                    <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <div className="flex justify-between w-64 mb-5">
                                    <label className="flex items-center text-xs">
                                        <input type="checkbox" name="remember" className="mr-1"></input>
                                        Remember me
                                    </label>
                                    <button className="text-xs">Forgot Password?</button>
                                </div>
                                <button className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white">Sign In</button>
                            </div>
                        </div>
                    </div> {/*Sign in*/}
                    <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <h2 className='text-3xl font-bold mb-2'>
                            Welcome!
                        </h2>
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="mb-10">Fill up your personal information and start your journey with SciQuel</p>
                        <button className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500">Sign Up</button>
                    </div> {/*Sign up*/}
                </div>
            </main>

        </div>
    )
}