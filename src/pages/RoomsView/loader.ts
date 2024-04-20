import { getFeaturedRooms, getOffers, Offer, Room, } from "../../services/services";

export interface LoaderType {
    rooms: Room[]
    offers: Offer[]
}

export async function loaderRooms(): Promise<LoaderType> {
    return {
        rooms: await getFeaturedRooms(),
        offers: await getOffers()
    }
}