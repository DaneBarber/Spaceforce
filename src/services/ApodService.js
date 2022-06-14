import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"



class ApodService {
  async getApod() {
    const res = await api.get()
    logger.log(res.data)
    AppState.apod = res.data
    AppState.copyright = res.data.copyright
    AppState.date = res.data.copyright
    AppState.explanation = res.data.explanation
    AppState.hdurl = res.data.hdurl
    AppState.media_type = res.data.media_type
    AppState.service_version = res.data.service_version
    AppState.title = res.data.title
    AppState.url = res.data.url
  }

}

export const apodService = new ApodService()
