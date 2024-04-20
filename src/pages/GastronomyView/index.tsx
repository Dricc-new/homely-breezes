import { useLoaderData } from "react-router-dom";
import { AppLayout } from "../../layouts/AppLayout";
import { LoaderType } from "./loader";
import SectionPreview, { SectionTitle } from "../../components/section-preview";
import './styles.css'

export function GastronomyView() {
    const { gastronomyHeader, foods } = useLoaderData() as LoaderType

    return <AppLayout>
        <SectionPreview
            images={gastronomyHeader.photos}
            subTitle="Delicious Food"
            title={<span dangerouslySetInnerHTML={{ __html: gastronomyHeader.title }}></span>}
            learnMoreUrl=""
            content={gastronomyHeader.content}
            reverse={true}
        />

        <section className="container mx-auto">
            <SectionTitle className='text-center' subTitle='Featured Rooms' >
                Choose a Better Room
            </SectionTitle>
            <hr className="my-4 md:my-10" />
            <div className="flex flex-wrap gap-16 mb-20">
                {foods.map(item =>
                    <div key={item.title} className="food-container flex max-lg:flex-col shadow-lg lg:h-96 rounded overflow-hidden bg-white">
                        <img src={item.img} className="w-full max-lg:h-64 lg:w-96  object-cover" alt="" />
                        <div className="w-full p-4 lg:p-8">
                            <h1 className="font-semibold text-lg md:text-2xl">{item.title}</h1>
                            <hr className="my-2" />
                            <p className="max-md:text-sm">{item.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    </AppLayout>
}