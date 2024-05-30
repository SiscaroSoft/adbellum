import { useState, useEffect } from 'react'
import { html } from '@/utils/environment'

export const useGlobal = () => {
    // ==========================================================================
    // isMobile
    // ==========================================================================
    const getDevice = () => {
        const isMobile =
            /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        window.isMobile = isMobile

        if (window.isMobile) {
            html.classList.add('is-mobile')
        }
    }

    // ==========================================================================
    // Get View Port
    // ==========================================================================
    const viewportWidth = () => {
        const [height, setHeight] = useState(window.innerHeight)

        useEffect(() => {
            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }, [])

        const handleResize = () => {
            setHeight(window.innerHeight)
        }

        let vh = height / 100
        html.style.setProperty('--vh', `${vh}px`)
    }

    return {
        getDevice,
        viewportWidth,
    }
}
