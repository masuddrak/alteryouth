import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ImpactCarousel from '../carousel/ImpactCarousel'
const ComunityImpact = () => {
    return (
        <main className='py-10'>
            <header className='container mx-auto'>
                <div className='w-full md:w-[700px] lg:w-[800px] px-4 md:px-0'>
                    <SectionHeader widControle={"container"} textAlign={"left"} title='Community Impact' description='Every scholarship begins with shipping a mobile phone to the parent of the student. Then they create their own mobile bank account
using that phone, to start receiving their childs scholarships directly, every month.'></SectionHeader>
                </div>
            </header>
            <article className=' carousel'>
                <ImpactCarousel></ImpactCarousel>
            </article>
        </main>
    )
}

export default ComunityImpact