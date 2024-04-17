import { API_URL } from "../env"

const ApiUrl = API_URL

export interface BannerNode {
    title: string
    content: string
    img: string
}

export async function getBanner(): Promise<BannerNode[]> {
    try {
        const response = await fetch(`${ApiUrl}/home?populate[0]=Banner.img`)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const banner: BannerNode[] = (await response.json()).data.attributes.Banner.map((item: any) => {
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

export interface SecctionHeadrerType { title: string, content: string, photos: string[] }

export async function getAboutUs(): Promise<SecctionHeadrerType> {
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

export async function getGastronomy(): Promise<SecctionHeadrerType> {
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