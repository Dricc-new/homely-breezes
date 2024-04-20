import { SectionTitle } from "../section-preview/secction-title";
import { Room } from "../../services/services";

export function FeatureRooms(props:{rooms:Room[]}) {
    return <section className='my-20'>
        <SectionTitle className='text-center mb-10' subTitle='Featured Rooms' >
            Choose a Better Room
        </SectionTitle>
        <ul className='grid sm:grid-cols-2'>
            {props.rooms.map((room, index) => <li key={index} className='relative overflow-hidden'>
                <img src={room.img} className='w-full' alt={room.title} />
                <div className='absolute cursor-pointer flex flex-col justify-end bg-stone-950 bg-opacity-30 text-white top-0 left-0 bottom-0 right-0 p-20'>
                    <h2>From ${room.price}/night</h2>
                    <h1 className='text-4xl font-medium'>{room.title}</h1>
                </div>
            </li>)}
        </ul>
    </section>
}