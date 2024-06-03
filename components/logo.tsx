'use client';
import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <div className='h-6 w-6'>
                <Image src='/hallynk-logo.svg' alt='' className='w-6 h-6' fill />
            </div>
        </>
    );

}

export default Logo