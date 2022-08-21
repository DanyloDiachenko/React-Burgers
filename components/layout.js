// basic structure of all pages (every page includes header / footer)

import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <div className='content'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;