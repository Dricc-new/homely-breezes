import { SectionTitle } from "../../components/section-preview/secction-title";
import { SliderButton } from "../../components/slider-button";

const offers = [
    { img: '/offers/1.jpg', title: 'Private room offer', description: 'Perfect room for newly married couples, with jacuzzi and pool, so you can enjoy your honeymoon.' },
    { img: '/offers/2.jpg', title: 'Relaxation offer', description: 'Enjoy saunas, massages, acupuncture and spa, release your stress and fatigue.' },
    { img: '/offers/3.jpg', title: 'Outdoor offer', description: 'Enjoy the variety of gastronomic products at a buffet table with an open bar, in a warm and summery atmosphere.' },
]

export function Offers() {
    return <section className='container mx-auto my-32'>
        <SectionTitle className='text-center mb-10' subTitle='Our Offers' >
            Ongoing Offers
        </SectionTitle>
        <ul className='grid md:grid-cols-3 gap-10'>
            {offers.map((offer, index) => <li key={index}>
                <div className='shadow-lg h-full flex flex-col relative bg-white p-2'>
                    <img className='w-full h-64  object-cover' src={offer.img} alt="" />
                    <h3 className='text-lg font-medium my-2'>{offer.title}</h3>
                    <p className="mb-4">{offer.description}</p>
                    <div className="flex-grow flex justify-end flex-col">
                        <SliderButton>Book Now</SliderButton>
                    </div>
                </div>
            </li>)}
        </ul>
    </section>
}