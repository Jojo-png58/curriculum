import {ChevronLeft, ChevronRight} from 'lucide-react'

export function Aichecimatec(){
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
            <h1>
                Em breve esta aba será dedicada para descrever melhor minha experiência como designer, competidor e em projetos na AIChE CIMATEC.
            </h1>
        </main>
    )
}