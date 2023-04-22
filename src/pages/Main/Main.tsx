import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { formatMoney } from '~/utils/money'
import { useMounted } from '~/utils/useMounted'
import { getMonthStatistic, GetMonthStatistic } from '~/api/getMonthStatistic'
import { Layout } from '~/components/Layout'

import styles from './Main.module.scss'

export function Main() {
    const mountedRef = useMounted()
    const [results, setResults] = useState<GetMonthStatistic | null>(null)

    useEffect(() => {
        getMonthStatistic().then((data) => {
            if (mountedRef.current) {
                setResults(data)
            }
        })
    }, [mountedRef])

    return (
        <Layout title="Статистика за месяц">
            {
                results === null
                    ? <i>Загрузка...</i>
                    : (
                        <div className={styles['content']}>
                            <div className={styles['debetLabel']}>Доходы за месяц</div>
                            <div className={styles['debet']}>{formatMoney(results.debet)}</div>
                            <div className={styles['creditLabel']}>Расходы за месяц</div>
                            <div className={styles['credit']}>{formatMoney(results.credit)}</div>
                            <div className={styles['availableLabel']}>Текущий остаток</div>
                            <div className={styles['available']}>{formatMoney(results.available)}</div>

                            {/* @ts-ignore */}
                            <NavLink to="/debet" className={styles['debetLink']}>(+) Доходы</NavLink>
                            {/* @ts-ignore */}
                            <NavLink to="/credit" className={styles['creditLink']}>(-) Расходы</NavLink>
                        </div>
                    )
            }
        </Layout>
    )
}
