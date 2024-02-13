import { IUser } from '../models/user';
import { appStateSelectors, useApp } from '../states/app';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const useApi = () => {
  const user = useApp(appStateSelectors.user) as IUser;

  const BASE_URL = `https://${user?.domain}`;
  const config = {
    headers: {
      // 'Content-Type': 'application/json',
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      'X-API-USER': user.api_user,
      'X-API-PASS': user.api_pass
    },
  };

  const apiInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000, // 30 sec
    ...config,
  });

  const get = <R>(
    url: string,
    configs?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R & { Response: any }>> => {
    return apiInstance.get(url, configs!).catch(err => {
      return err;
    });
  };

  const put = <R>(
    url: string,
    params?: Record<string, string | number | boolean | object | undefined>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R & { Response: any }>> => {
    return apiInstance.put(url, params, config).catch(err => {
      return err;
    });
  };
  const del = <R>(
    url: string,
    // params?: Record<string, string | number | boolean | object | undefined>,
  ): Promise<AxiosResponse<R & { Response: any }>> => {
    return apiInstance.delete(url).catch(err => {
      return err;
    });
  };
  const post = async <R = any>(
    url: string,
    params?: Record<string, string | number | boolean | object | undefined>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R & { Response: any }>> => {
    try {
      const response = await apiInstance.post(url, params, config);
      return response;
    } catch (error: any) {
      // console.log(" === post error",error.response)
      return error as any;
    }
  };

  const toQueryParams = (params: Record<string, string | number | boolean>) => {
    return Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');
  };

  const toFormDataArray = (
    params: Record<string, string | number | boolean>,
  ) => {
    return Object.entries(params).map(([name, data]) => ({
      name,
      data: `${data}`,
    }));
  };

  return { get, post, put, del, toQueryParams, toFormDataArray, BASE_URL };
};

export default useApi;
