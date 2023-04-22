import {Home as HomeIcon, Search, Library, Contact} from 'lucide-react'
import Link from 'next/link'

export function Sidebar(){
    return(
        <div>
            <aside className="fixed w-72 h-full bg-zinc-950 p-6">
                <div className='flex items-center gap-2'>
                    <div className='w-3 h-3 bg-red-500 rounded-full'/>
                    <div className='w-3 h-3 bg-yellow-500 rounded-full'/>
                    <div className='w-3 h-3 bg-green-500 rounded-full'/>
                </div>
                <nav className='space-y-5 mt-10'>
                    <Link href="/" className='flex items-center gap-3 text-sn font-semibold text-zinc-200 hover:text-zinc-400'>
                    <HomeIcon />
                    Início
                    </Link>
                    <Link href="" className='flex items-center gap-3 text-sn font-semibold text-zinc-200 hover:text-zinc-400'>
                    <Search />
                    Buscar
                    </Link>
                    <Link href="/biblioteca"className='flex items-center gap-3 text-sn font-semibold text-zinc-200 hover:text-zinc-400'>
                    <Library />
                    Minha biblioteca
                    </Link>
                    <Link href="/contatos"className='flex items-center gap-3 text-sn font-semibold text-zinc-200 hover:text-zinc-400'>
                    <Contact />
                    Contatos
                    </Link>
                </nav>

                <nav className='mt-6 pt-6 border-t border-zinc-600 flex flex-col gap-3'>
                    <Link href='/resumopage' className='tex-sn text-zinc-400 hover:text-zinc-100'>Resumo Completo</Link>
                    <Link href='/cimatecjrpage' className='tex-sn text-zinc-400 hover:text-zinc-100'>CIMATEC jr</Link>
                    <Link href='aichepage' className='tex-sn text-zinc-400 hover:text-zinc-100'>AIChE CIMATEC</Link>
                    <Link href='tech2page' className='tex-sn text-zinc-400 hover:text-zinc-100'>TecH2 Racing</Link>
                    <Link href='icpage' className='tex-sn text-zinc-400 hover:text-zinc-100'>Iniciação Científica</Link>
                </nav>

            </aside>
        </div>
    )
}