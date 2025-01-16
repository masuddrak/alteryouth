import React from 'react'

import "./Banner.css"
import JoinForm from './JoinForm'
export const Banner = () => {

    return (
        <div className='banner h-[70vh] md:h-[70vh]' >
            <div className='container mx-auto md:flex md:flex-col md:justify-center  h-full w-full lg:w-2/3'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div className='text-white space-y-2 pt-28 md:pt-0 mx-4 md:mx-0'>

                        <h3 className='text-5xl font-extrabold hidden md:flex'>Start your <br /> scholarship</h3>
                        <h3 className='text-4xl font-extrabold  flex md:hidden'>Start your scholarship</h3>


                        <p>Directly for students in Government Primary
                        </p>
                        <p>Schools throughout Bangladesh</p>
                    </div>
                    <div className='flex justify-end absolute -bottom-16 right-0 left-0 md:bottom-0 w-full md:relative '>
                        <JoinForm></JoinForm>
                    </div>
                </div>
            </div>

        </div>
    )
}
