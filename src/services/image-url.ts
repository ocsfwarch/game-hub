import noImage from "../assets/no-image-placeholder-6f3882e0.webp"
const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage
    const start = url.indexOf('/games')
    const newUrl = url.slice(0, start) + "/crop/600/400" + url.slice(start)
    return newUrl
}

export default getCroppedImageUrl
