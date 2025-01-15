import Image, { StaticImageData } from 'next/image'
import React from 'react'
interface AppCardProps {
    image: string | StaticImageData
    title: string
    description: string
}
const AppCard: React.FC<AppCardProps> = ({ image, title, description }) => {
    return (
        <div className='w-[400px] md:w-[360px] lg:w-[340px]   mx-auto'>
            <div className='w-full mx-auto md:w-[200px]'>
                <Image src={image} alt='app_graduation' width={500} height={500} className='w-full h-full' />
            </div>
            <div className='text-center'>
                <h3 className='text-lg font-bold pt-4 pb-2'>{title}</h3>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default AppCard