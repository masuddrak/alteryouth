import Image from 'next/image';
import React from 'react'
import usImage from "../../public/icons/us.svg"
interface ScholarshipCardProps { key: string; scholarship: { name: string; country_code: string; invite_code: string; message: string; count: number; started_at: string; invited_by: string; student_imgs: string[]; }; }
const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
    const { name, invite_code, count, student_imgs } = scholarship
    return (
        <div className='shadow-md p-3 rounded-md space-y-2'>
            <div>
                <div className='flex gap-2 items-center'>
                    <h4 className='font-semibold text-sm cursor-pointer hover:underline'>@{invite_code}</h4>
                    <Image src={usImage} alt='flag' width={100} height={100} className='w-[15px] h-[15px]'></Image>
                </div>
                <p className='text-[12px] bg-green-100 font-medium text-green-500 px-[5px] rounded-full inline-block'>{count} Scholarships</p>
            </div>
            <div className='flex items-center gap-2'>
                <Image src={student_imgs[0]} alt='hhhh' width={80} height={80} className='w-[40px] h-[40px] rounded-full'></Image>
                <div>
                    <h4 className='font-semibold text-[12px]'>{name}</h4>
                    <p className='text-[12px]'>Lohokachi Government Primary School</p>
                </div>
            </div>
        </div>
    )
}

export default ScholarshipCard