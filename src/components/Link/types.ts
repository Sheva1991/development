
export type PropsType = {
    title: string,
    link: string,
    component?: React.FC,
    className?: string,
    large?: any,
    pagination?: any,
    action?: (event: React.MouseEvent<HTMLElement>) => void,
}
