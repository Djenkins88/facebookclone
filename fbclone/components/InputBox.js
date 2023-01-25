import Image from 'next/image'
import { useRef } from 'react'
import { useSession } from "next-auth/react"
import { EmojiHappyIcon } from '@heroicons/react/solid'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { db } from '../firebase'
import { initializeApp } from 'firebase/app'
import {  current, setDoc, doc, serverTimestamp } from 'firebase/firestore'


function InputBox() {
    const {data: session} = useSession()
    const docData = useRef(null);
    
    const sendPost = (e) => {
        e.preventDefault();

        if (!docData.current.value) return;
        
        const specialOfTheDay = doc(db, current, 'users', 'posts');
            function writeDailySpecial() {
                const docData = {
                    message: docData.current.value,
                    name: session.user.name,
                    email: session.user.email,
                    image: session.user.image,
                    timestamp: serverTimestamp()
                }
                setDoc(specialOfTheDay, docData)
        }

        docData.current.value = "";
        writeDailySpecial();
    }



    return (

    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <Image
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
                layout='fixed'
            />
            <form className='flex flex-1'>
                <input
                    className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                    type='text' 
                    ref={docData}
                    placeholder={`Whats on your mind, ${session.user.name}?`}
                />
                <button hidden type='submit' onClick={sendPost}>
                    Submit
                </button>
            </form>
        </div>

        <div className='flex justify-evenly p-3 border-top'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500' />
                <p className=' text-xs sm: text-sm xl:text-base'>Live Video</p>
            </div>

            <div className='inputIcon'>
                <CameraIcon className='h-7 text-green-400' />
                <p className=' text-xs sm: text-sm xl:text-base'>Photo/Video</p>
            </div>

            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-300' />
                <p className=' text-xs sm: text-sm xl:text-base'>Feeling/Activity</p>
            </div>

        </div>
    </div>
  )
}

export default InputBox