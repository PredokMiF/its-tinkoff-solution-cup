import { data } from './internal/data'

export function getGroup(id: number) {
    return data.group.list.find((group) => group.id === id)
}
