import {ChevronLeft, ChevronRight} from 'lucide-react'

export function Resumo(){
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
            <div className='grid grid-cols-3 items-center gap-4 mt-4 bg-zinc-800 p-4 rounded-2xl'>
                <div>Nome: Jonata Souza dos Santos</div>
                <div>Telefone: (71) 9 8709-3243</div>
                <div>E-mail: jonatasouza.aluno@outlook.com</div>
            </div>
            <div className='grid items-center gap-4 mt-4 bg-zinc-800 p-4 rounded-2xl'>
                <h1 className='font-bold text-2xl'>Formação Acadêmica</h1>
                <div>Graduando em Engenharia de Produção - Centro Universitário SENAI CIMATEC - Previsão de Conclusão: 2024.1</div>
            </div>
            <div className='grid items-center gap-4 mt-4 bg-zinc-800 p-4 rounded-2xl'>
                <h1 className='font-bold text-2xl'>Experiências Profissionais</h1>
                <div className='font-semibold text-lg'>CIMATEC jr - Empresa júnior do SENAI CIMATEC (2020-2022)</div>
                <div>- Cargo: Coordenador de projetos (2020-2021) - Atuei em 5 projetos com uma equipe enxuta de 4 pessoas, aplicando 5S e fazendo pesquisas de mercado, o faturamento total dos projetos foi de 7K com NPS 98.</div>
                <div>- Cargo: Diretor de Gente e Gestão (2021-2022) - Compus o quadro societário da empresa na gestão de 2022, gerindo um departamento de 10 pessoas, atuando principalmente na gestão de pessoas e financeiro, realizamos um planejamento estratégico que nos permitiu alcançar a marca de 360K de faturamento e 60 projetos com NPS 90.</div>
            </div>
            <div className='grid items-center gap-4 mt-4 bg-zinc-800 p-4 rounded-2xl'>
                <h1 className='font-bold text-2xl'>Competências</h1>
                <div className='grid grid-cols-3 gap-2'>
                <div>- Inglês Intermediário</div>
                <div>- Excel Avançado</div>
                <div>- Python, JavaScript, ReactJs, NextJs</div>
                <div>- Power BI Intermediário</div>
                <div>- Lean Manufacturing</div>
                <div>- Gestão de Pessoas</div>
                <div>- Gestão Financeira</div>
                <div>- Planejamento Estratégico</div>
                </div>
            </div>

        </main>
    )
}