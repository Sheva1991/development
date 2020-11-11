export type PropsType = {
    title: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    className?: string,
    large?: any,
    pagination?: any,
    type?: 'submit' | 'reset' | 'button' | undefined,
    disabled?: boolean
}
