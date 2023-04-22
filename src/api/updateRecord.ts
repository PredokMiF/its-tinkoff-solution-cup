import { waitResponse } from '~/utils/wait'

import type { Record } from '~/types/record'

import { data } from './internal/data'

export async function updateRecord(updatedRecord: Record) {
    await waitResponse()

    const position = data.record.list.findIndex((record) => record.id === updatedRecord.id)

    data.record.list[position] = updatedRecord
}
