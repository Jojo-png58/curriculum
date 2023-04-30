import {ChevronLeft, ChevronRight, Disc} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Library(){
    return(
        <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
            </button>
            </div>
            <div className='grid grid-cols-3 gap-10 mt-4'>
                <button  className='flex gap-4 text-2xl font-bold hover:'>
                <Link href='/cimatecjrpage' className='flex items-center gap-4'>
                <Image src='/album-icon.svg' width={120} height={120} alt='Icone temporario library' />
                <strong>CIMATEC jr</strong>
                </Link>
                </button>

                <div  className='flex gap-4 text-2xl font-bold'>
                <Link href='/cimatecjrpage' className='flex items-center gap-4'>
                <Image src='/album-icon.svg' width={120} height={120} alt='Icone temporario library' />
                <strong>CIMATEC jr</strong>
                </Link>
                </div>
            </div>
        </main>
    )
}