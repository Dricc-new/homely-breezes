import { HomeCarousel } from './home-carousel'
import { Offers } from '../../components/offers'
import { FeatureRooms } from '../../components/feactured-rooms'

import SectionPreview from '../../components/section-preview'
import { AppLayout } from '../../layouts/AppLayout'
import { useLoaderData } from 'react-router-dom'
import { LoaderType } from './loader'


export function HomeView() {
    const { aboutUs, gastronomy, rooms, offers } = useLoaderData() as LoaderType

    return <AppLayout>
        <HomeCarousel />
        <SectionPreview
            images={aboutUs.photos}
            subTitle="About Us"
            title={<span dangerouslySetInnerHTML={{ __html: aboutUs.title }}></span>}
            learnMoreUrl="/about"
            content={aboutUs.content}
            reverse={false}
        />
        <section className='bg-[url(/video/video.jpg)] my-32 relative bg-no-repeat bg-cover bg-center w-full h-[768px]'>
            <article className='bg-stone-950 text-white bg-opacity-30 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col'>
                <h3 className='text-base'>Honeymoon rooms</h3>
                <h2 className='text-5xl text-center leading-[1.15]'>
                    Relax and Enjoy
                    <br />
                    with your better half
                </h2>
            </article>
        </section>
        <SectionPreview
            images={gastronomy.photos}
            subTitle="Delicious Food"
            title={<span dangerouslySetInnerHTML={{ __html: gastronomy.title }}></span>}
            learnMoreUrl="#"
            content={gastronomy.content}
            reverse={true}
        />
        <FeatureRooms rooms={rooms} />
        <Offers offers={offers} />
        <section className='flex max-md:flex-col container mx-auto justify-center gap-6 items-center text-2xl lg:text-4xl my-20'>
            <h1>For Reservation or Query?</h1>
            <a href="tel:+19 999 999 9999" className='flex items-center gap-2 p-4 px-8 font-sans relative text-blue-500 delay-200 after:duration-200 hover:text-blue-50 z-10 after:-z-10 border-2 border-blue-500 overflow-hidden after:-translate-x-full hover:after:translate-x-0 transition-all after:transition-all after:w-full after:h-full after:bg-blue-500 after:left-0 after:top-0 after:absolute '><i className='fa fa-phone'></i> +19 999 999 9999</a>
        </section>
    </AppLayout>
}