import React from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '~/router'

import styles from './App.module.scss'

export function App() {
    return (
        <div className={styles['app-container']}>
            <RouterProvider router={router}/>
        </div>
    )
}
