import { getMonthRange } from '~/utils/dateRange'
import { waitResponse } from '~/utils/wait'

import { getRecords } from './internal/getRecords'

export interface GetMonthStatistic {
    debet: number
    credit: number
    available: number
}

export async function getMonthStatistic(): Promise<GetMonthStatistic> {
    const monthRange = getMonthRange()

    await waitResponse()

    const monthDebet = getRecords({ recordType: 'debet', accountListId: [], groupListId: [], tagListId: [], interval: monthRange })
    const monthCredit = getRecords({ recordType: 'credit', accountListId: [], groupListId: [], tagListId: [], interval: monthRange })
    const allDebet = getRecords({ recordType: 'debet', accountListId: [], groupListId: [], tagListId: [], interval: { from: { year: 0, month: 0, date: 0 }, to: monthRange.to } })
    const allCredit = getRecords({ recordType: 'credit', accountListId: [], groupListId: [], tagListId: [], interval: { from: { year: 0, month: 0, date: 0 }, to: monthRange.to } })

    return ({
        debet: monthDebet.reduce((summ, { count }) => (summ + count), 0),
        credit: monthCredit.reduce((summ, { count }) => (summ + count), 0),
        available: allDebet
            .reduce((summ, { count }) => (summ + count), 0) - allCredit.reduce((summ, { count }) => (summ + count), 0),
    })
}
