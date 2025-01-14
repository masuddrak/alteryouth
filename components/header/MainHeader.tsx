import Link from 'next/link'
import React from 'react'
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


const MainHeader = () => {
    return (
        <header className='bg-white py-5'>
            <nav className='container mx-auto flex justify-between'>
                <div className='flex items-center space-x-3'>
                    <Sheet>
                        <SheetTrigger>
                            <GiHamburgerMenu></GiHamburgerMenu>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <div className='flex items-center'>
                                        <GiAchievement className='scale-150'></GiAchievement>
                                        <h2>Alteryouth</h2>
                                    </div>
                                </SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                    <div className='flex items-center'>
                        <GiAchievement className='scale-150'></GiAchievement>
                        <h2>Alteryouth</h2>
                    </div>
                </div>

                <div className='md:flex md:space-x-4 hidden md:block'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/works'>How it works
                    </Link>
                    <Link href='/scholarships'>Scholarships</Link>
                    <Link href='/collaborate'>Collaborate</Link>
                    <Link href='/login'>Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default MainHeader