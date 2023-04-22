import { waitResponse } from '~/utils/wait'

import type { RecordType } from '~/types/recordType'
import type { Record } from '~/types/record'

import { getRecords as getRecordsInternal, GetRecords as GetRecordsInternal } from './internal/getRecords'

export interface GetRecords {
    recordType: RecordType
}

export async function getRecords(args: GetRecords): Promise<Record[]> {
    const params: GetRecordsInternal = {
        recordType: args.recordType,
        accountListId: [],
        groupListId: [],
        tagListId: [],
        // interval
        // count
    }

    await waitResponse()

    return getRecordsInternal(params)
}
