import {ChevronLeft, ChevronRight} from 'lucide-react'

export function Cimatecjr(){
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
            <div>
                Experiência na empresa júnior CIMATEC jr
            </div>
        </main>
    )
}