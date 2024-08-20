import './index.css'
import logoFooter from '../../resources/img/logo_wh.svg'



const MENUS = [
    {
        title: 'Home',
        key: 'home',
        path: '/'
    },
    {
        title: 'About',
        key: 'about',
        path: '/about',
        children: [
            {
                title: 'About our company'
            },
            {
                title: 'Service'
            },
            {
                title: 'Concept'
            },
            {
                title: 'CSV/Socical contribution activities'
            }
        ]
    },
    {
        title: 'News',
        key: 'news',
        path: '/news'
    },
    {
        title: 'Brand',
        key: 'brand',
        path: '/brand'
    },
    {
        title: 'Media',
        key: 'media',
        path: '/media'
    },
    {
        title: 'SDGs',
        key: 'sdgs',
        path: '/sdgs'
    },
    {
        title: 'Contact',
        key: 'contact',
        path: '/contact'
    },
    {
        title: 'Company',
        key: 'company',
        path: '/company'
    }
]
export const Footer = () => {
    return <footer className='footer'>
        <div className='wrapper-container'>
            <div className='footer_wrapper container'>
                <div className='footer_logo'>
                    <img src={logoFooter} alt='logo footer' />
                </div>
                <ul className='footer_nav'>
                    {MENUS.map((menu) => {
                        return <li key={menu.path} className='footer_item'>
                            {menu.title}
                            {menu?.children?.length > 0 && menu.children.map((v) => {
                                return <ul className='footer_item-sub' key={v.title}>
                                    <li className='footer_item-subItem'>-{v.title}</li>
                                </ul>
                            })}
                        </li>
                    })}
                </ul>
            </div>
            <div className='container'>
                <div className='footer-policies'>
                    <a href='#'>Privacy policy</a>
                    <a href='#'>Information Security Policy</a>
                </div>
            </div>
        </div>
        <div className='footer_coppyright'>
            <div className='wrapper-container'>
                <div className='container'>
                    Copyright &copy; 2024 charion.all rights reserved
                </div>
            </div>
        </div>
    </footer>
}