import { SectionTitle } from "../section-preview/secction-title";
// import { SliderButton } from "../slider-button";
import { Offer } from "../../services/services";

export function Offers(props: { offers: Offer[] }) {

    return <section className='container mx-auto my-28'>
        <SectionTitle className='text-center my-10' subTitle='Our Offers' >
            Ongoing Offers
        </SectionTitle>
        <ul className='grid md:grid-cols-3 gap-10'>
            {props.offers.map((offer, index) => <li key={index}>
                <div className='shadow-lg h-full flex flex-col relative bg-white p-2'>
                    <img className='w-full h-64  object-cover' src={offer.img} alt="" />
                    <h3 className='text-lg font-medium my-2'>{offer.title}</h3>
                    <p className="mb-4">{offer.description}</p>
                    <div className="flex-grow flex justify-end flex-col">
                        {/* <SliderButton>Book Now</SliderButton> */}
                    </div>
                </div>
            </li>)}
        </ul>
    </section>
}