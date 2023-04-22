const money = new Intl.NumberFormat('ru', { style: 'currency', currency: 'RUB' })

export function formatMoney(number: number) {
    return money.format(number)
}
