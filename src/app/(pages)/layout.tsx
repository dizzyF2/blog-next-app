import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="m-0 flex flex-col justify-between">
            <Header/>
            <div className="main-Wrapper min-h-[45vh] my-10">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout