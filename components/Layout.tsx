import React from 'react';
import Footer from './Footer';
import LayoutStyles from './Layout.module.scss';
import Navbar from './Navbar';

const Layout: React.FC = ({ children }) => {
    return <>

        <div className={LayoutStyles.container}>
            {children}
        </div>

    </>;
}

export default Layout;