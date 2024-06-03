'use client';

import Logo from "../logo";
import { Nav } from "../nav";

const Header = () => {
    return (
        <>
            <header className='flex justify-between items-center bg-primary h-20 w-full' > 
               <div className="flex mx-5 justify-between items-center w-full space-x-3">
               <h2 className="text-white text-3xl font-bold uppercase">Hallynk</h2>

                <Nav />

                <div className="">

                    fdjvkd
                </div>
               </div>
            </header>
        </>
    );

}

export default Header;