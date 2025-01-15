import React from 'react'
import Link from 'next/link'
interface NavContainerProps {
    scrolled: boolean;
}
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'
import { GiAchievement } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";



const NavContainer: React.FC<NavContainerProps> = ({ scrolled }) => {
    return (
        <nav className={`container mx-auto flex justify-center md:justify-between font-bold  ${scrolled ? "text-baseBg" : "text-baseBg md:text-white"}`}>
            <div className='flex items-center justify-between md:justify-start space-x-5'>
                <div className='absolute left-4 md:relative md:left-0'>

                    <Sheet>
                        <SheetTrigger>
                            <GiHamburgerMenu className='scale-[1.5]'></GiHamburgerMenu>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <div className='flex items-center'>
                                        <GiAchievement className='scale-150'></GiAchievement>
                                        <h2 className=''>Alteryouth</h2>
                                    </div>
                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className='flex items-center gap-2'>
                    <GiAchievement className='scale-[3]'></GiAchievement>
                    <h2 className='text-xl'>Alteryouth</h2>
                </div>
            </div>

            <div className={`md:flex md:space-x-4 hidden font-semibold`}>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/works'>How it works
                </Link>
                <Link href='/scholarships'>Scholarships</Link>
                <Link href='/collaborate'>Collaborate</Link>
                <Link href='/login'>Login</Link>
            </div>
        </nav>
    )
}

export default NavContainer