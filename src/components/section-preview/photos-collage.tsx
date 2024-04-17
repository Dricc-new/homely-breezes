import React from "react"

export class PhotosCollage extends React.Component<{ images: string[] }> {
    constructor(props: { images: string[] }) {
        super(props)
    }
    public render(): React.ReactNode {
        const { images } = this.props
        console.log(images)
        return <article className='flex max-sm:p-4 -space-x-4 relative w-full h-full justify-center'>
            {images[0] && <div><img src={images[0]} className='object-contain max-h-96 mb-10 ring-4 ring-white shadow-lg -rotate-6' alt="" /></div>}
            {images[2] && <div><img src={images[2]} className='object-contain z-10 max-h-96 basis-1/2 absolute top-20 ring-4 ring-white shadow-lg' alt="" /></div>}
            {images[1] && <div><img src={images[1]} className='object-contain max-h-96 basis-1/2 mt-10 ring-4 ring-white shadow-lg rotate-6' alt="" /></div>}
        </article>
    }
}