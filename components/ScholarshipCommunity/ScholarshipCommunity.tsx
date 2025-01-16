import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ScholarshipCard from './ScholarshipCard'
import data from "../../public/data/leaderboard.json"
import { Button } from '../ui/button'
const ScholarshipCommunity = () => {
    return (
        <main className='py-10'>
            <header>
                <h3 className="text-xl pb-3 text-center text-baseBg">#alteryouthrevolution
                </h3>
                <SectionHeader widControle="" textAlign='' title='The Scholarship Community' description='Despite public primary schools being free of cost in Bangladesh,
many students still drop out of school to work and earn in order to support their families.
Your scholarship helps a child attend school and support their families at the same time.'></SectionHeader>
            </header>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {data.slice(0, 16).map(scholarship => <ScholarshipCard key={scholarship.started_at} scholarship={scholarship}></ScholarshipCard>)}
            </div>
            <div className='flex justify-center mt-3'>
                <Button className='bg-baseBg'>See More</Button>
            </div>
        </main>
    )
}

export default ScholarshipCommunity