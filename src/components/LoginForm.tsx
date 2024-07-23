"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { loginUser } from '@/services/auth';

export type userType = {
    email: string,
    password: string

}

const LoginForm = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setError, formState: { errors } } = useForm<userType>({ mode: "onChange" })

    const onSubmit = async (data: any) => {
        try {

            const response = await loginUser(data)

            if (response.status === 200) {
                console.log(response);

                localStorage.setItem('token', response.data.access_token);
                localStorage.setItem('name', response.data.user.firstName);
                push("/user")
            }


        } catch (error: any) {
            console.log(error)
            setError('root', { type: "manual", message: error.response.data.message })

        }
    }



    return (
        <div className="w-full flex justify-center  border-2 border-black items-center h-[100vh]" >
            <form className="bg-white w-[500px] shadow-md  border-gray-300 rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="text" placeholder="email" {...register("email", { required: "champs obligatoire" })} />
                    {errors?.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}

                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password" >
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="******************" {...register("password", { required: "champs obligatoire" })} />
                    {errors?.password && <p className="text-red-500 text-xs italic">{errors.password?.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-gray-800 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>

                </div>
                {errors?.root && <p className="text-red-500 text-xs italic">{errors.root?.message}</p>}

            </form>

        </div>
    )
}

export default LoginForm