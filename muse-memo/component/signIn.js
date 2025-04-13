import Image from 'next/image'
import Form from 'next/form'
import poster from "@/public/poster-black.svg"
import CreateNewAccountButton from './signingButtons/createNewAccountButton'

export default function SignIn() {
    
  return (
    <div className='flex h-screen'>
        {/* SignIn */}
        <div className='grid place-content-center w-screen'>
            {/* <p className='text-center'>Log into MuseMemo</p> */}
            <Form className='flex flex-col space-y-2.5' action="/search">
                <input 
                    className='border-2 rounded-md p-2 placeholder:text-black' 
                    type='email'
                    name="email" 
                    placeholder='Email'
                    required
                />
                <input 
                    className='border-2 rounded-md p-2 placeholder:text-black' 
                    type='password'
                    name="password" 
                    placeholder='Enter your password'
                    required
                />
                <button 
                    className='border-[#B5FCCD] rounded-md p-2 bg-[#B5FCCD]/80 cursor-pointer hover:bg-[#B5FCCD]/99' 
                    type="submit"
                >Log In</button>
            </Form>
            
            <button
                className='pt-2'
                type='submit'
            >
               <p className='text-center hover:text-blue-700 cursor-pointer'>Forgot password?</p>
            </button>
            <CreateNewAccountButton />
        </div>

        {/* Poster */}
        <div className='grid place-content-center w-screen'>
            <Image 
                className=''
                src={poster}
                alt='MuseMemo Poster/Logo'
            />
        </div>
    </div>
  )
}
