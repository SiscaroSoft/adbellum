import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useElementOnScreen } from '@/hooks/useElementOnScreen'
import { html } from '@/utils/environment'

import { Header } from '@/components'
import { PageProvider } from '../../context/PageProvider'

export const Layout = () => {
    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    })

    useLayoutEffect(() => {
        if (isVisible) html.classList.add('is-over-home-hero')
        else html.classList.remove('is-over-home-hero')
    }, [isVisible])

    return (
        <PageProvider>
            <div ref={containerRef}></div>

            <Header />

            <div className="o-scroll">
                <Outlet />
            </div>
        </PageProvider>
    )
}
