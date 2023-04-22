import type { Account } from '~/types/account'
import type { Group } from '~/types/group'
import type { Tag } from '~/types/tag'
import type { Record } from '~/types/record'
import type { FixRange } from '~/types/fixRange'

export const data: {
    account: {
        counter: number
        list: Account[]
    },
    group: {
        counter: number
        list: Group[]
    },
    tag: {
        counter: number
        list: Tag[]
    },
    record: {
        counter: number
        list: Record[]
    },
    fixRange: FixRange[]
} = {
    account: {
        counter: 4,
        list: [
            {
                id: 1,
                name: 'Мой кошелек',
                description: 'Чисто мои деньги',
            },
            {
                id: 2,
                name: 'Жена',
                description: '',
            },
            {
                id: 3,
                name: 'Копилка на первоначалку',
                description: 'Копим на дом',
            },
        ],
    },
    group: {
        counter: 8,
        list: [
            {
                id: 1,
                recordType: 'debet',
                name: 'ЗП',
                description: '',
            },
            {
                id: 2,
                recordType: 'debet',
                name: 'Подарили',
                description: '',
            },
            {
                id: 3,
                recordType: 'credit',
                name: 'Медицина',
                description: '',
            },
            {
                id: 4,
                recordType: 'credit',
                name: 'Машина',
                description: '',
            },
            {
                id: 5,
                recordType: 'credit',
                name: 'Развлекухи',
                description: '',
            },
            {
                id: 6,
                recordType: 'credit',
                name: 'Перевод со счета',
                description: '',
            },
            {
                id: 7,
                recordType: 'debet',
                name: 'Перевод на счета',
                description: '',
            },
        ],
    },
    tag: {
        counter: 4,
        list: [
            {
                id: 1,
                recordType: 'credit',
                name: 'Обязательные платежи',
                description: 'Ежемесячные платежи, как коммуналка или плата за садик',
            },
            {
                id: 2,
                recordType: 'credit',
                name: 'Необходимые траты',
                description: 'Все то, без чего не обойтись',
            },
            {
                id: 3,
                recordType: 'credit',
                name: 'Садик',
                description: '',
            },
        ],
    },
    record: {
        counter: 1,
        list: [
            {
                id: 1,
                type: 'debet',
                accountId: 1,
                groupId: 1,
                tagListId: [],
                year: 2023,
                month: 2,
                date: 5,
                isFixed: false,
                count: 100000,
                comment: '',
            },
            {
                id: 2,
                type: 'debet',
                accountId: 1,
                groupId: 1,
                tagListId: [],
                year: 2023,
                month: 3,
                date: 5,
                isFixed: false,
                count: 50000,
                comment: 'Премия',
            },
            {
                id: 3,
                type: 'credit',
                accountId: 1,
                groupId: 4,
                tagListId: [2, 3],
                year: 2023,
                month: 3,
                date: 10,
                isFixed: false,
                count: 2500,
                comment: '',
            },
        ],
    },
    fixRange: [],
}
