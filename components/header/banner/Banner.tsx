import React from 'react'

import "./Banner.css"
import JoinForm from './JoinForm'
export const Banner = () => {

    return (
        <div className='banner ' >
            <div className='container mx-auto flex flex-col justify-center  h-full w-full lg:w-2/3'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div className='text-white space-y-2 mt-60 md:mt-0 '>
                        <h3 className='text-5xl font-extrabold'>Start your
                        </h3>
                        <h3 className='text-5xl font-extrabold '>
                            scholarship</h3>
                        <p>Directly for students in Government Primary
                        </p>
                        <p>Schools throughout Bangladesh</p>
                    </div>
                    <div className='flex justify-end mt-10 mx-4 md:mx-0 md:mt-0'>
                        <JoinForm></JoinForm>
                    </div>
                </div>
            </div>

        </div>
    )
}
