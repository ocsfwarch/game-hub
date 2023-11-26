
const getCroppedImageUrl = (url: string) => {
    const start = url.indexOf('/games')
    const newUrl = url.slice(0, start) + "/crop/600/400" + url.slice(start)
    return newUrl
}

export default getCroppedImageUrl
