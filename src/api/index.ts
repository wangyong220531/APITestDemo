import axios from "axios"

type GetAxiosConfig<T extends UrlList> = {
    url: T
    method?: "POST" | "GET" | "PUT" | "DELETE"
    baseURL?: string
    retry?: number
} & (T extends keyof RequestQuery ? { query: RequestQuery[T] } : {}) &
    (T extends keyof RequestData ? { data: RequestData[T] } : {}) &
    (IsParamUrl<T> extends true ? { param: Record<GetParamNameList<T>, string> } : {})

export async function request<T extends UrlList>(config: GetAxiosConfig<T>): Promise<ResponseData[T] | null> {
    const retry = config.retry || 1
    for (let i = 0; i < retry; i++) {
        try {
            const { method, baseURL } = config
            const params = config["query" as keyof GetAxiosConfig<T>] as T extends keyof RequestQuery ? RequestQuery[T] : undefined
            const data = config["data" as keyof GetAxiosConfig<T>] as T extends keyof RequestData ? RequestData[T] : undefined
            const param = config["param" as keyof GetAxiosConfig<T>] as IsParamUrl<T> extends true ? Record<GetParamNameList<T>, string> : undefined
            let url: string = config.url
            if (url.includes(":") && param) {
                Object.keys(param).forEach(key => {
                    url = url.replace(`:${key}`, param[key as GetParamNameList<T>])
                })
            }
            const response = await axios({ url, method, baseURL, params, data })
            return response.data as ResponseData[T]
        } catch (error) {
            console.log(error)
        }
    }
    return null
}

const baseURL = "http://32.118.0.4:8989"

export function getDeviceQueryResult(config: { page: number; count: number }) {
    return request({
        url: "/gb/device/query/devices",
        baseURL,
        query: config
    })
}

export function getCameraQueryResult(config: CameraPointQueryQuery & { deviceId: string }) {
    const { page, count, deviceId } = config
    return request({
        url: "/gb/device/query/devices/:deviceId/channels",
        query: { page, count },
        baseURL,
        param: { deviceId }
    })
}

export async function getCameraPlayList(config: { deviceId: string; channelId: string }) {
    return request({
        url: "/gb/play/start/:deviceId/:channelId",
        baseURL,
        param: config
    })
}

export async function stopCameraPlay(config: { deviceId: string; channelId: string }) {
    return request({
        url: "/gb/play/stop/:deviceId/:channelId",
        baseURL,
        param: config
    })
}

export async function getCameraTree() {
    return request({
        url: "/scout/getCameraTree",
        baseURL,
        data: {},
        method: "POST"
    })
}
