import { PageContext } from '@/context/PageContext'
import { useState } from 'react'

export const PageProvider = ({ children }) => {
    const [state, setState] = useState({ section: 'blank', page: 'blank' })

    return <PageContext.Provider value={{ state, setState }}>{children}</PageContext.Provider>
}
