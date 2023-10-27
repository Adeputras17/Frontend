import React from "react";
import {FaGoogle, FaRegEnvelope, FaUser} from "react-icons/fa";
import {MdLockOutline} from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Register = () => {
  return (
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center p-5 min-h-screen'>
    <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl'>
        <div className='w-3/5 p-5'>
            <div className='flex justify-center items-center mt-4'>
                <img src={logo} width={250} height={100}  alt='img'/>
            </div>
            <div className='py-10'>
                <h2 className='text-3xl font-bold text-teal-500 mb-2'>
                    Register to Account
                </h2>
                <div className='border-2 w-10 border-teal-500 inline-block mb-2'></div>
                <div className='flex justify-center my-2'>
                    <Link href='#' className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                        <FaGoogle className="text-sm"/>
                    </Link>
                </div>
                <p className='text-gray-400 my-3'>or use your email account</p>
                <div className='flex flex-col items-center'>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <FaUser className="text-gray-400 m-2"/>
                        <input type='user' name='user' placeholder='User Name' className='bg-gray-100 outline-none text-sm flex-1' />
                    </div>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <FaRegEnvelope className="text-gray-400 m-2"/>
                        <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                    </div>
                    <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                        <MdLockOutline className="text-gray-400 m-2"/>
                        <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                    </div>
                </div>
                <Link href='/register' className='border-2 border-teal-500 text-teal-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-teal-500 hover:text-white'>
                    Register
                </Link>
            </div>
        </div>
        <div className='w-2/5 bg-teal-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Hallo, Pejuang PTN!!</h2>
            <p className='mb-10'>
                Ukur dan asah kemampuanmu dengan mengikuti Tryout UTBK di Go Prestasi, tersedia ribuan soal paling update yang terbukti meloloskan ribuan siswa setiap tahunnya
            </p>
            <br/>
            <p className='text-sm text-gray-200'>Sudah memiliki akun? silahkan login di bawah ini</p>
            <Link
                href='/login'
                className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-teal-500' 
            >
               Login
            </Link>
        </div>
    </div>
    </main>
  )
}

export default Register;