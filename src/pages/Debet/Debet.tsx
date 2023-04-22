import type { ColumnsType } from 'antd/es/table'

import { Table } from 'antd'
import { useEffect, useState, useMemo } from 'react'

import type { Record } from '~/types/record'

import { formatMoney } from '~/utils/money'
import { useMounted } from '~/utils/useMounted'
import { getRecords } from '~/api/getRecords'
import { getAccount } from '~/api/getAccount'
import { getGroup } from '~/api/getGroup'
import { getTag } from '~/api/getTag'
import { Layout } from '~/components/Layout'

export function Debet() {
    const mountedRef = useMounted()
    const [tableData, setTableData] = useState<Record[]>([])
    const [dataLoading, setDataLoading] = useState<boolean>(true)

    const columns = useMemo(() => {
        const columns: ColumnsType<Record> = [
            {
                title: 'Дата',
                key: 'date',
                render: (record: Record) => {
                    const { year, month, date } = record

                    const yearStr = year.toString().padStart(4, '0')
                    const monthStr = month.toString().padStart(2, '0')
                    const dateStr = date.toString().padStart(2, '0')

                    return `${yearStr}.${monthStr}.${dateStr}`
                },
            },
            {
                title: 'Счет',
                dataIndex: 'accountId',
                key: 'accountId',
                render: (accountId: number) => getAccount(accountId)!.name,
            },
            {
                title: 'Группа',
                dataIndex: 'groupId',
                key: 'groupId',
                render: (groupId: number) => (groupId ? getGroup(groupId)!.name : ''),
            },
            {
                title: 'Теги',
                dataIndex: 'tagListId',
                key: 'tagListId',
                render: (tagListId: number[]) => (tagListId.map((tagId) => getTag(tagId)!.name).join(', ')),
            },
            {
                title: 'Сумма',
                dataIndex: 'count',
                key: 'count',
                render: (count: number) => formatMoney(count),
            },
            {
                title: 'Комментарий',
                dataIndex: 'comment',
                key: 'comment',
            },
        ]

        return columns
    }, [])

    useEffect(() => {
        setDataLoading(true)

        getRecords({
            recordType: 'debet',
        }).then((data) => {
            if (mountedRef.current) {
                setTableData(data)
                setDataLoading(false)
            }
        })
    }, [mountedRef])

    return (
        <Layout title="Доходы">
            <Table
                rowKey="id"
                columns={columns}
                dataSource={tableData}
                loading={dataLoading}
            />
        </Layout>
    )
}

/* <Column
    title="Действия"
    key="action"
    render={(_: any, record: TableData) => (
        <Space size="middle">
            <NavLink to="/edit" state={record}>Редактировать</NavLink>
        </Space>
    )}
/> */
