import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.scss'


const Nav: React.FC = () => {
    const [menuOpen, setmenuOpen] = React.useState(false)
    const refMenu = React.useRef(null)

    const toggleMenu = () => {
        setmenuOpen(!menuOpen)
    }

    const menuClose = () => {
        setmenuOpen(false)
    }

    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(refMenu.current)) {
            setmenuOpen(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])
    return (
        <nav ref={refMenu}>
            <div className={styles.toggler} onClick={toggleMenu}  >Menu </div>
            {menuOpen &&
                <div className={styles.menu} >
                    <div className={styles.menu__item}><NavLink to='/users' onClick={menuClose}>Пользователи</NavLink></div>
                    <div className={styles.menu__item}><NavLink to='/posts' onClick={menuClose}>Статьи</NavLink></div>
                </div>
            }
        </nav>
    )
}

export default Nav