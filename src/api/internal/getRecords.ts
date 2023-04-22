import { RecordType } from '~/types/recordType'

import { data } from './data'

export interface GetRecords {
    recordType: RecordType
    accountListId: number[]
    groupListId: number[]
    tagListId: number[]
    interval?: {
        from: {
            year: number
            month: number
            date: number
        },
        to: {
            year: number
            month: number
            date: number
        },
    }
    count?: {
        from: number,
        to: number,
    }
}

export function getRecords(args: GetRecords) {
    const { recordType, accountListId, groupListId, tagListId, interval, count } = args
    const intervalFromDt = interval ? +new Date(interval.from.year, interval.from.month, interval.from.date) : null
    const intervalToDt = interval ? +new Date(interval.to.year, interval.to.month, interval.to.date) : null

    return data.record.list
        .filter((record) => {
            if (record.type !== recordType) {
                return false
            }

            if (accountListId.length > 0 && !accountListId.includes(record.accountId)) {
                return false
            }

            if (groupListId.length > 0 && (!record.groupId || !groupListId.includes(record.groupId))) {
                return false
            }

            if (
                tagListId.length > 0 && (
                    !record.tagListId.length || !tagListId.every((tagId) => record.tagListId.includes(tagId))
                )
            ) {
                return false
            }

            if (intervalFromDt && intervalToDt) {
                const recordDt = +new Date(record.year, record.month, record.date)

                if (recordDt < intervalFromDt || intervalToDt < recordDt) {
                    return false
                }
            }

            if (count) {
                if (record.count < count.from || count.to < record.count) {
                    return false
                }
            }

            return true
        })
        .map((record) => ({ ...record }))
}
