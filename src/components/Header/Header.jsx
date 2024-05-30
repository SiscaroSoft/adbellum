import { useContext } from 'react'
import './Header.css'
import { PageContext } from '../../context/PageContext'

export const Header = () => {
    const { state, setPage } = useContext(PageContext)

    return (
        <header
            className={`c-header section-nav is-nav ${state.page === 'Hero5' ? 'is-fixed' : state.page === 'Hero6' ? 'is-hero6' : state.page === 'Hero8' ? 'is-hero8' : state.page === 'Hero9' ? 'is-hero9' : ''}`}>
            <div className="o-container is-nav">
                <div className="nav_column">
                    <a href="" className="w-inline-block nav_brand-wrapper" style={{ fontWeight: '700' }}>
                        ADBELLUM
                    </a>
                </div>

                <nav className="nav_column is-right">
                    <div className="nav_spacer"></div>
                    <div className="nav_links">
                        <li className="nav_link w-inline-block">
                            <a href="" className="text-fluid-sm">
                                Cursos
                            </a>
                        </li>

                        <li className="nav_link w-inline-block">
                            <a href="" className="text-fluid-sm">
                                Adbellum
                            </a>
                        </li>

                        <li className="nav_link w-inline-block">
                            <a href="" className="text-fluid-sm">
                                Calendario
                            </a>
                        </li>

                        <li className="nav_link w-inline-block">
                            <a href="" className="text-fluid-sm">
                                Recursos
                            </a>
                        </li>

                        <li className="nav_link w-inline-block">
                            <a href="" className="text-fluid-sm">
                                Contacto
                            </a>
                        </li>
                    </div>
                    <div className="nav_button-wrapper">
                        <a href="" className="button w-inline-block">
                            <div className="nav_text-wrap">Asociados</div>
                            <div className="button-hover"></div>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
