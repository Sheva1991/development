interface CardItem {
    key: string | number,
    label: string
    value: any,
}
export type CardData = CardItem[]

export type CardProps = {
    data: CardData,
    link?: string
}
