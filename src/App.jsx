import { useEffect } from 'react'
import { AppRouter } from '@/router/AppRouter'
import { useGlobal } from '@/hooks/useGlobal'
import { html } from '@/utils/environment'

export const App = () => {
    const { getDevice, viewportWidth } = useGlobal()

    useEffect(() => {
        html.classList.remove('has-no-js')
        getDevice()
        html.classList.add('is-loaded')
        html.classList.add('is-ready')
    }, [])

    viewportWidth()

    return <AppRouter />
}
