import {ChevronLeft, ChevronRight} from 'lucide-react'

export function Main() {
    return(
    <main className="flex-1 p-6">
    <div className='hidden md:flex items-center gap-4'>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronLeft />
      </button>
      <button className='rounded-full bg-black/40 p-1'>
        <ChevronRight />
      </button>
    </div>
    <div className='space-y-10'>
    <h1 className='font-bold text-2xl md:text-4xl mt-6'>
      Bem-vindo ao meu currículo
    </h1>
    <span className='xl:hidden text-xs text-red-400 text-justify'>
      Versão mobile ainda está limitada, por favor utilize a versão desktop.
    </span>

    <div className='grid mt-4 lg:ml-auto lg:mr-auto'>
      <div className='bg-white/10 rounded-xl items-center gap-4 overflow-hidden md:flex'>
        <img className='w-fit h-fit md:w-80 md:h-fit lg:w-2/6 lg:h-fit xl:w-96 xl:h-fit' src="/profile-spotify.png" alt="Foto profile" />
        <div className='flex flex-col space-y-2 mb-1'>
          <strong className='hidden lg:flex mr-4 ml-4 lg:ml-0 text-white text-base md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold'>This is Jonata Souza dos Santos</strong>
          <p className='text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-zinc-400 mr-4 ml-4 lg:ml-0 text-justify text'>Eu sou graduando em Engenharia de Produção pelo Centro Universitário SENAI CIMATEC (BA) e adoro me desafiar através de projetos pessoais, como este em que recriei a interface do Spotify como meu currículo. Tenho experiência como Diretor e coordenador de projetos na CIMATEC jr, a maior empresa júnior de poli engenharia e arquitetura da Bahia, e também como designer da AIChE CIMATEC, além de ser competidor no Chem-a-Car Competition pela mesma associação. Atualmente, estou competindo na Fórmula SAE H2 Challenge pelo SENAI CIMATEC e também realizando uma iniciação científica na análise de redes marítimas da América do Sul e América do Norte, tendo já publicado 3 artigos e trabalhando em outros projetos de pesquisa.</p>
        </div>
      </div>
    </div>
    </div>
  </main>
  )
}