import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import Image from 'next/image'
import playstoreImage from "../../public/icons/playstore_small.svg"
import appleStoreImage from "../../public/icons/appstore_small.svg"
import app_graduation from "../../public/images/app_graduation.png"
import app_scholarship from "../../public/images/app_scholarship.jpg"
import app_school from "../../public/images/app_school.png"
import AppCard from './AppCard'
const Scholarships = () => {
    return (
        <article className='my-80 md:mt-0 pt-10 w-full'>
            <SectionHeader title={"The Uber for Scholarships"} description={"A platform connecting the world with financially struggling students in Government Primary Schools of Bangladesh"} />
            <div className='flex justify-center mt-5 mb-8'>
                <div className='flex gap-4'>
                    <Image src={playstoreImage} alt='playstore_small' width={100}></Image>
                    <Image src={appleStoreImage} alt='playstore_small' width={100}></Image>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 flex gap-4 md:gap-8 lg:gap-10  xl:gap-20   overflow-x-scroll md:overflow-hidden scroll w-full md:max-w-[1260px] lg:max-w-[1300px] md:mx-auto'>
                <div className=''>
                    <AppCard image={app_graduation} title={"Transfer directly"} description={"Your scholarship is transferred directly to your student's family on their mobile bank account."}></AppCard>
                </div>
                <div className=''>
                    <AppCard image={app_scholarship} title={'Get school reports'} description={'View attendance data and report cards from your students school, until completion of Class 5.'}></AppCard>
                </div>
                <div className='md:col-span-2 lg:col-span-1'>
                    <AppCard image={app_school} title={"Ensure a literate citizen"} description={'Your scholarship continues until completion of class 5, when your student achieves literacy.'}></AppCard>
                </div>


            </div>
        </article>
    )
}

export default Scholarships