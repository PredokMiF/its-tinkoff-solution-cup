import { data } from './internal/data'

export function getAccount(id: number) {
    return data.account.list.find((account) => account.id === id)
}
