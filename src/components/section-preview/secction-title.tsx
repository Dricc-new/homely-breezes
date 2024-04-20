import React from "react";
import { TypeChild } from "./types";
type SectionTitleProps = { children?: TypeChild, subTitle?: string, className?: string }

export class SectionTitle extends React.Component<SectionTitleProps> {
    constructor(props: SectionTitleProps) {
        super(props)
    }
    public render(): React.ReactNode {
        const { className, subTitle, children } = this.props
        return <div className={className || ''}>
            <h1 className='text-base text-cyan-500 my-4'>{subTitle || 'Section Subtitle'}</h1>
            <h2 className=' text-3xl md:text-5xl leading-[1.15] mb-2'>
                {children || 'Title'}
            </h2>
        </div >
    }
}