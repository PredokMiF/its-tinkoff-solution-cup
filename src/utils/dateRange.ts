interface DateRangeItem {
    year: number,
    month: number
    date: number
}

export function getYearRange(year?: number): { from: DateRangeItem, to: DateRangeItem } {
    const dateNow = new Date()
    if (year === undefined) {
        year = dateNow.getFullYear()
    }

    const dateStart = new Date(year, 0, 1)
    const dateEnd = new Date(year + 1, 0, 0)

    return ({
        from: {
            year: dateStart.getFullYear(),
            month: dateStart.getMonth(),
            date: dateStart.getDate(),
        },
        to: {
            year: dateEnd.getFullYear(),
            month: dateEnd.getMonth(),
            date: dateEnd.getDate(),
        },
    })
}

export function getMonthRange(month?: number, year?: number): { from: DateRangeItem, to: DateRangeItem } {
    const dateNow = new Date()

    if (year === undefined) {
        year = dateNow.getFullYear()
    }

    if (month === undefined) {
        month = dateNow.getMonth()
    }

    const dateStart = new Date(year, month, 1)
    const dateEnd = new Date(year, month + 1, 0)

    return ({
        from: {
            year: dateStart.getFullYear(),
            month: dateStart.getMonth(),
            date: dateStart.getDate(),
        },
        to: {
            year: dateEnd.getFullYear(),
            month: dateEnd.getMonth(),
            date: dateEnd.getDate(),
        },
    })
}
