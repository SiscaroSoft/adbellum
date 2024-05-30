import {
    Hero1,
    Hero2,
    Work1,
    Expertise3,
    Work2,
    Work3,
    About1,
    Expertise1,
    Expertise2,
    Price1,
    Hero3,
    About3,
    Hero4,
    About2,
    Work4,
    About4,
    Price2,
    Hero5,
    Hero6,
    Expertise4,
    Expertise5,
    Work5,
} from '@/app/pages/Home/Sections'

import { menuItemData } from '../../../data/menuItemData'
import { useEffect, useReducer, useRef, useState, createContext, useContext } from 'react'

const PageContext = createContext(null)

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    const { page, updatePage } = useContext(PageContext)

    const handleButton = e => {
        const page = e.target.parentNode.getAttribute('data-title')
        if (page !== null) {
            updatePage({ name: page })
        }
    }

    return (
        <div className={`nav-filters__dropdown ${dropdown ? 'show' : ''}`}>
            <ul className="nav-filters__sublist">
                {submenus.map((submenu, index) => (
                    <li data-title={submenu.title} key={index} onClick={handleButton}>
                        <div className="nav-filters__subitem">
                            <span>{submenu.title}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false)
    let ref = useRef()

    useEffect(() => {
        const handler = event => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false)
            }
        }

        document.addEventListener('mousedown', handler)
        document.addEventListener('touchstart', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
            document.removeEventListener('touchstart', handler)
        }
    }, [dropdown])

    const onMouseEnter = () => {
        setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false)
    }

    const toggleDropdown = () => {
        setDropdown(prev => !prev)
    }

    const closeDropdown = () => {
        dropdown && setDropdown(false)
    }

    return (
        <li ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
            <div className="menu-float__item" aria-haspopup="menu" aria-expanded={dropdown ? 'true' : 'false'}>
                {items.title}
                <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
            </div>
        </li>
    )
}

export const Home = () => {
    const depthLevel = 0

    const [page, setPage] = useState('light')

    const updatePage = newPage => {
        setPage(currentPage => ({
            ...currentPage,
            name: newPage,
        }))
    }

    return (
        <main>
            <PageContext.Provider value={{ page, updatePage }}>
                <div className="menu-float">
                    <div className="inner">
                        <div className="menu-float-inner">
                            <div className="menu-float-wrapper">
                                <div className="menu-float_bottom">
                                    <div className="menu-float-secondary">
                                        <div className="menu-float__content">
                                            <ul className="menu-float__nav">
                                                {menuItemData.map((menu, index) => {
                                                    return (
                                                        <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Hero6 />
                <About4 />
                <Work5 />
                <Expertise5 />
                <Price2 />
            </PageContext.Provider>
        </main>
    )
}
