import { Banner, getAboutUs, getBanners, getFeaturedRooms, getGastronomy, getOffers, Offer, Room, SecctionHeaderType } from "../../services/services";

export interface LoaderType {
    aboutUs: SecctionHeaderType
    banners: Banner[]
    gastronomy: SecctionHeaderType
    rooms: Room[]
    offers: Offer[]
}

export async function loaderHome(): Promise<LoaderType> {
    return {
        aboutUs: await getAboutUs(),
        banners: await getBanners(),
        gastronomy: await getGastronomy(),
        rooms: await getFeaturedRooms(),
        offers: await getOffers()
    }
}