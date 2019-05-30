const getData = async (url: string): Promise<any> => {
    try {
        const response = await fetch(url)
        const responseData = await response.json()
        return responseData
    }
    catch (err) {
        console.log(err)
    }
}
export default getData