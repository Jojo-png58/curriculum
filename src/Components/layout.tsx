import { Sidebar } from './sidebar'
import { Footer } from './footer'

export default function Layout ({children}: any) {
    return(
        <div className='h-screen flex flex-col'>
            <div className="flex flex-1">
                <Sidebar />
                <main className='ml-16 md:ml-72'>{children}</main>
            </div>
        <Footer />
    </div>
    )
}