import React from 'react'
interface SectionHeaderProps {
    title: string,
    description: string
}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <div className='text-center space-y-2 mb-5'>
            <h3 className=' text-2xl font-bold lg:text-3xl'>{title}
            </h3>
            <div className='flex justify-center '>
                <p className={` ${description.length > 200 ? "md:w-[700px]" : "md:w-[550px]"}`}>{description}</p>
            </div>

        </div>
    )
}

export default SectionHeader