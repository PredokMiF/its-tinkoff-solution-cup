import { data } from './data'

export function getRecords(id: number) {
    return data.record.list.find((record) => record.id === id)
}
