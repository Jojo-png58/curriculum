import {ChevronLeft, ChevronRight} from 'lucide-react'

export function Main() {
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
    <div className='space-y-10'>
    <h1 className='font-bold text-4xl mt-6'>
      Bem-vindo ao meu currículo
    </h1>

    <div className='grid mt-4'>
      <div className='bg-white/10 rounded-xl items-center gap-4 overflow-hidden flex'>
        <img src="/profile-spotify.png" width={360} height={360} alt="Foto profile" />
        <div className='flex flex-col justify-center space-y-5'>
          <strong className='text-white text-4xl font-bold'>This is Jonata Souza dos Santos</strong>
          <p className='text-white text-lg mr-4 text-justify'>Eu sou graduando em Engenharia de Produção pelo Centro Universitário SENAI CIMATEC (BA) e adoro me desafiar através de projetos pessoais, como este em que recriei a interface do Spotify como meu currículo. Tenho experiência como Diretor e coordenador de projetos na CIMATEC jr, a maior empresa júnior de poli engenharia e arquitetura da Bahia, e também como designer da AIChE CIMATEC, além de ser competidor no Chem-a-Car Competition pela mesma associação. Atualmente, estou competindo na Fórmula SAE H2 Challenge pelo SENAI CIMATEC e também realizando uma iniciação científica na análise de redes marítimas da América do Sul e América do Norte, tendo já publicado 3 artigos e trabalhando em outros projetos de pesquisa.</p>
        </div>
      </div>
    </div>
    </div>
  </main>
  )
}