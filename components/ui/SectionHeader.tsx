import React from 'react'
interface SectionHeaderProps {
    title: string,
    description: string
    widControle: string
    textAlign: string

}
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, widControle, textAlign }) => {
    return (
        <div className={`space-y-2 mb-5 ${textAlign ? `text-${textAlign}` : "text-center"}`}>
            <h3 className=' text-2xl font-bold lg:text-3xl'>{title}
            </h3>
            <p className={widControle ? `text-${textAlign}` : `text-center ${description.length > 200 ? "md:w-[700px] mx-auto" : "md:w-[550px] mx-auto"}`}>{description}</p>
        </div>
    )
}

export default SectionHeader