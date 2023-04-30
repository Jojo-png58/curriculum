import {Shuffle, Play, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'

export function Footer() {
    return (
        <footer className="sticky xl:bottom-0 xl:right-0 bg-zinc-800 border-t border-zinc-700 p-1 lg:p-3 md:flex items-center justify-between">
        <div className='hidden md:flex items-center gap-3'>
        <img src="/profile-spotify.png" width={56} height={56} alt="Foto profile" />
        <div className='flex flex-col'>
          <strong className='font-normal'>My life</strong>
          <span className='text-xs text-zinc-400'>Jonata Souza</span>
        </div>
        </div>
        
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <button className='text-zinc-200 hover:text-zinc-500'>
              <Shuffle size={18} />
            </button>
            <button className='text-zinc-200 hover:text-zinc-500'>
              <SkipBack size={18} />
            </button>
            <button className='w-10 h-10 flex items-center justify-content pl-2.5 rounded-full bg-green-500 hover:bg-zinc-100 transition-all text-black'>
              <Play />
            </button>
            <button className='text-zinc-200 hover:text-zinc-500'>
              <SkipForward size={18} />
            </button>
            <button className='text-zinc-200 hover:text-zinc-500'>
              <Repeat size={18} />
            </button>
          </div>
        </div>
        
        <div className='hidden md:flex items-center gap-4'>
          <Mic2 size={18}/>
          <LayoutList size={18}/>
          <Laptop2 size={18}/>
          <div>
            <Volume size={18}/>
          </div>
          <Maximize2 size={18}/>
        </div>
      </footer>
    )
}