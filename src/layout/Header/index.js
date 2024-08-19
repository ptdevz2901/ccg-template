import './index.css'
import logo from '../../resources/img/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'


const MENUS = [
    {
        title: 'Home',
        key: 'home',
        path: '/'
    },
    {
        title: 'About',
        key: 'about',
        path: '/about'
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


export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return <header className="header-wrapper">
        <div className='header_logo'>
            <img alt='logo' src={logo} />
        </div>
        <ul className='header_menu'>
            {MENUS.map((menu) => {
                const activeClassName = location.pathname === menu.path ? 'active' : ''
                return <li
                    className={`header_menu-item ${activeClassName}`}
                    onClick={() => {
                        navigate(menu.path)
                    }}
                >{menu.title}</li>
            })}
        </ul>
    </header>
}