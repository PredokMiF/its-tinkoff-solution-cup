import type { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Layout.module.scss'

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    return (
        <div className={styles['layout']}>
            <header className={styles['header']}>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/debet">Доходы</NavLink>
                <NavLink to="/credit">Расходы</NavLink>
            </header>

            <h1 className={styles['title']}>{title}</h1>

            {children}
        </div>
    )
}
