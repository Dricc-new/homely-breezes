import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { Arrow, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import { useEffect, useState } from "react";
import { BannerNode, getBanner } from "../../services/services";

const _plugins = [new AutoPlay({ duration: 5000 }), new Arrow()];

export function HomeCarousel() {
    const [banner, setBanner] = useState<BannerNode[]>([])
    useEffect(() => {
        getBanner().then(data => setBanner(data))
    }, [])

    return <div className='w-full h-screen'>
        <Flicking circular={true} plugins={_plugins}>
            {banner.map((item, index) => <div key={index} className='w-screen h-screen relative'>
                <img src={item.img} className='w-screen h-screen object-cover' alt="" />
                <div className='absolute bg-stone-950 bg-opacity-40 text-white left-0 top-0 sm:gap-4 right-0 bottom-0 flex flex-col justify-center items-center'>
                    <h1 className='text-4xl sm:text-6xl lg:text-8xl'>{item.title}</h1>
                    <p className='lg:text-2xl font-extralight'>{item.content}</p>
                </div>
            </div>)}
            <ViewportSlot>
                <span className="flicking-arrow-prev max-md:hidden after:left-4 before:left-4 w-12 h-12 before:w-5 after:w-5 before:h-5 after:h-5 flex justify-center is-thin rounded-full after:bg-white before:bg-white bg-white bg-opacity-25"></span>
                <span className="flicking-arrow-next max-md:hidden after:right-4 before:right-4 w-12 h-12 before:w-5 after:w-5 before:h-5 after:h-5 flex justify-center is-thin rounded-full after:bg-white before:bg-white bg-white bg-opacity-25"></span>
            </ViewportSlot>
        </Flicking>;
    </div>
}