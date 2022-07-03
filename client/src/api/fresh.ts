import http from '@/utils/request'
import config from '@/config/index'
import { ResultData, BaseResult, Pagination, ApiMethodContants, ListResultData } from '@/common/types/apiResult.type'

export interface FreshKey {
  id: string
  key: string
}

export function getFreshKey(): Promise<ResultData<FreshKey>> {
  return http.request<ResultData<FreshKey>>({
    url: `${config.api.baseUrl}/fresh/key`,
    method: ApiMethodContants.GET,
  })
}

export function setFreshKey(data: FreshKey): Promise<ResultData<FreshKey>> {
  return http.request<ResultData<FreshKey>>({
    url: `${config.api.baseUrl}/fresh/key`,
    method: ApiMethodContants.POST,
    data: data,
  })
}

export function getFreshList(): Promise<ResultData<any>> {
  return http.request<ResultData<any>>({
    url: `${config.api.baseUrl}/fresh`,
    method: ApiMethodContants.GET,
  })
}

export function getFileList() {
  return http.request<ResultData<any>>({
    url: `${config.api.baseUrl}/fresh/file`,
    method: ApiMethodContants.GET,
  })
}

export function updateFresh(data: any) {
  return http.request<ResultData<FreshKey>>({
    url: `${config.api.baseUrl}/fresh`,
    method: ApiMethodContants.PUT,
    data: data,
  })
}
