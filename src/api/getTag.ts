import { data } from './internal/data'

export function getTag(id: number) {
    return data.tag.list.find((tag) => tag.id === id)
}
