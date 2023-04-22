import { createBrowserRouter } from 'react-router-dom'

import { Main } from '~/pages/Main'
import { Debet } from '~/pages/Debet'
import { Credit } from '~/pages/Credit'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    },
    {
        path: '/debet',
        element: <Debet/>,
    },
    {
        path: '/credit',
        element: <Credit/>,
    },
])
