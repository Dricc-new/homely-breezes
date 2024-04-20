import React from "react";
import { PhotosCollage } from "./photos-collage";
import { SectionTitle } from "./secction-title";
import { SectionPreviewType } from "./types";
import { Link } from "react-router-dom";

export class SectionPreview extends React.Component<SectionPreviewType> {
    public constructor(props: SectionPreviewType) { super(props) }
    public render(): React.ReactNode {
        const { images, subTitle, title, content, learnMoreUrl, reverse } = this.props
        return <section className={`container mx-auto my-28 flex ${reverse ? 'flex-row-reverse' : ''} sm:gap-20 w-full max-lg:p-2 max-lg:flex-col max-sm:items-center justify-between`}>
            <article className='lg:w-1/2 flex flex-col flex-grow justify-center'>
                <SectionTitle subTitle={subTitle}>{title}</SectionTitle>
                <p className='mb-12 font-light'>{content}</p>
                {learnMoreUrl && <Link to={learnMoreUrl} className='underline underline-offset-8'>Learn More</Link>}
            </article>
            <PhotosCollage images={images} />
        </section>
    }
}