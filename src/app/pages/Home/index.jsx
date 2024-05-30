import { useRef, useEffect, useState, useContext } from 'react'
import { menuItemData } from '../../../data/menuItemData'
import { PageContext } from '../../../context/PageContext'
import {
    Hero1,
    Hero2,
    Work1,
    Expertise3,
    Work2,
    Work3,
    About1,
    About5,
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
    Work6,
    Hero7,
    Hero8,
    Hero9,
    Expertise6,
    Expertise7,
    Work7,
} from '@/app/pages/Home/Sections'

export const Home = () => {
    const { state, setPage } = useContext(PageContext)
    console.log(state.section)

    const renderSwitch = param => {
        switch (param) {
            case 'Hero1':
                return <Hero1 />
            case 'Hero2':
                return <Hero2 />
            case 'Hero3':
                return <Hero3 />
            case 'Hero4':
                return <Hero4 />
            case 'Hero5':
                return <Hero5 />
            case 'Hero6':
                return <Hero6 />
            case 'Hero7':
                return <Hero7 />
            case 'Hero8':
                return <Hero8 />

            case 'Hero9':
                return <Hero9 />

            case 'About1':
                return <About1 />
            case 'About2':
                return <About2 />
            case 'About3':
                return <About3 />
            case 'About4':
                return <About4 />
            case 'About5':
                return <About5 />

            case 'Expertise1':
                return <Expertise1 />
            case 'Expertise2':
                return <Expertise2 />
            case 'Expertise3':
                return <Expertise3 />
            case 'Expertise4':
                return <Expertise4 />
            case 'Expertise5':
                return <Expertise5 />

            case 'Expertise6':
                return <Expertise6 />

            case 'Expertise7':
                return <Expertise7 />

            case 'Work1':
                return <Work1 />
            case 'Work2':
                return <Work2 />
            case 'Work3':
                return <Work3 />
            case 'Work4':
                return <Work4 />
            case 'Work5':
                return <Work5 />
            case 'Work6':
                return <Work6 />
            case 'Work7':
                return <Work7 />
        }
    }

    return (
        <main>
            <div className="menu-float">
                <div className="inner">
                    <div className="menu-float-inner">
                        <div className="menu-float-wrapper">
                            <div className="menu-float_bottom">
                                <div className="menu-float-secondary">
                                    <div className="menu-float__content">
                                        <ul className="menu-float__nav">
                                            {menuItemData.map((menu, index) => {
                                                return <MenuItems items={menu} key={index} />
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {renderSwitch(state.page)}
        </main>
    )
}

const Dropdown = ({ submenus, dropdown }) => {
    const { state, setState } = useContext(PageContext)

    const handleButton = e => {
        e.preventDefault()

        let section, page

        const event = e.target.getAttribute('data-title')

        if (event.charAt(0) === 'H') {
            section = 'Hero'
        }

        page = event

        setState({
            section,
            page,
        })
    }

    return (
        <div className={`nav-filters__dropdown ${dropdown ? 'show' : ''}`}>
            <ul className="nav-filters__sublist">
                {submenus.map((submenu, index) => (
                    <li key={index}>
                        <div className="nav-filters__subitem">
                            <div data-title={submenu.title} onClick={handleButton}>
                                {submenu.title}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const MenuItems = ({ items }) => {
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
                <Dropdown submenus={items.submenu} dropdown={dropdown} />
            </div>
        </li>
    )
}
