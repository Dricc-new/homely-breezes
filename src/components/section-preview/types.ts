export type TypeChild = string | JSX.Element | JSX.Element[]

export type SectionPreviewType = { 
    images: string[],
    subTitle?: string,
    title?: TypeChild,
    content: string,
    learnMoreUrl?: string,
    reverse?: boolean 
}