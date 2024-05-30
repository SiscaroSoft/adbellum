import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PathConstants } from '@/data/config'
import { Layout } from '@/app/layout/Layout'
import { Home } from '@/app/pages'

export const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: PathConstants.HOME,
                    element: <Home />,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}
