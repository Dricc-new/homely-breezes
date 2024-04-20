import { API_URL } from "../env"

const ApiUrl = API_URL

export interface Banner {
    title: string
    content: string
    img: string
}

export async function getBanners(): Promise<Banner[]> {
    try {
        const response = await fetch(`${ApiUrl}/home?populate[0]=Banner.img`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const banner: Banner[] = (await response.json()).data.attributes.Banner.map((item: any) => {
            const { title, content } = item
            const img = ApiUrl.replace('/api', '') + item.img.data.attributes.url
            return { title, content, img };
        })

        return banner
    } catch (error) {
        console.log(error)
        return []
    }
}

export interface SecctionHeaderType { title: string, content: string, photos: string[] }

export async function getAboutUs(): Promise<SecctionHeaderType> {
    try {
        const response = await fetch(`${ApiUrl}/about?populate[0]=photo1&populate[1]=photo2&populate[2]=photo3`)
        const aboutUs = (await response.json()).data.attributes
        const photos: string[] = []
        if (aboutUs.photo1.data) photos.push(ApiUrl.replace('/api', '') + aboutUs.photo1.data.attributes.url)
        if (aboutUs.photo2.data) photos.push(ApiUrl.replace('/api', '') + aboutUs.photo2.data.attributes.url)
        if (aboutUs.photo3.data) photos.push(ApiUrl.replace('/api', '') + aboutUs.photo3.data.attributes.url)

        const { title, content } = aboutUs
        return { title, content, photos }
    } catch (error) {
        console.log(error)
        return { title: 'Title', content: 'Content', photos: [] }
    }
}

export async function getGastronomy(): Promise<SecctionHeaderType> {
    try {
        const response = await fetch(`${ApiUrl}/gastronomy?populate[0]=photo1&populate[1]=photo2&populate[2]=photo3`)
        const gastronomy = (await response.json()).data.attributes
        const photos: string[] = []
        if (gastronomy.photo1.data) photos.push(ApiUrl.replace('/api', '') + gastronomy.photo1.data.attributes.url)
        if (gastronomy.photo2.data) photos.push(ApiUrl.replace('/api', '') + gastronomy.photo2.data.attributes.url)
        if (gastronomy.photo3.data) photos.push(ApiUrl.replace('/api', '') + gastronomy.photo3.data.attributes.url)

        const { title, content } = gastronomy
        return { title, content, photos }
    } catch (error) {
        console.log(error)
        return { title: 'Title', content: 'Content', photos: [] }
    }
}


export interface Room {
    img: string
    title: string
    price: string
    description?: string
}

export async function getFeaturedRooms(): Promise<Room[]> {
    try {
        const response = await fetch(`${ApiUrl}/featured-room?populate[0]=rooms.img`)
        const rooms = (await response.json()).data.attributes.rooms.data

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return rooms.map((item: any) => {
            const { title, price } = item.attributes
            const img = ApiUrl.replace('/api', '') + item.attributes.img.data.attributes.url
            return { title, price, img }
        })
    } catch (error) {
        console.log(error)
        return []
    }
}

export interface Offer {
    title: string
    description: string
    img: string
}

export async function getOffers(): Promise<Offer[]> {
    try {
        const response = await fetch(`${ApiUrl}/offers?populate=*`)
        const offers = (await response.json()).data

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return offers.map((item: any) => {
            const { title, description } = item.attributes
            const img = ApiUrl.replace('/api', '') + item.attributes.img.data.attributes.url
            return { title, description, img }
        })
    } catch (error) {

        console.log(error)
        return []
    }
}