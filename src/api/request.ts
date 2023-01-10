import axios from "axios"

interface RequestData extends Scout {}

type UrlList = keyof RequestData

interface ResponseData extends ResScout {}

// type RequestConfig<T extends UrlList> = {
//     request: RequestData[T]z
//     response: ResponseData[T]
// }

type ResponseResult<T> = T | null

export async function request<T extends UrlList>(url: T, data: RequestData[T]): Promise<ResponseData[T] | null> {
    try {
        const response = await axios({
            url,
            data,
            method: "POST",
            baseURL:"http://32.118.0.4:8989"
        })
        return response.data
    } catch (error) {
        console.log(error)
        return null
    }
}
