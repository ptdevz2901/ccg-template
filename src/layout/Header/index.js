import './index.css'
import logo from '../../resources/img/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH } from '../../consts/path'


const MENUS = [
    {
        title: 'Home',
        key: 'home',
        path: PATH.HOME
    },
    {
        title: 'About',
        key: 'about',
        path: PATH.ABOUT
    },
    {
        title: 'News',
        key: 'news',
        path: PATH.NEWS
    },
    {
        title: 'Brand',
        key: 'brand',
        path: PATH.BRAND
    },
    {
        title: 'Media',
        key: 'media',
        path: PATH.MEDIA
    },
    {
        title: 'SDGs',
        key: 'sdgs',
        path: PATH.SDGS
    },
    {
        title: 'Contact',
        key: 'contact',
        path: PATH.CONTRACT
    },
    {
        title: 'Company',
        key: 'company',
        path: PATH.COMPANY
    }
]


export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return <div className='wrapper-container border-header '>
        <header className="header-wrapper container">
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
    </div>
}