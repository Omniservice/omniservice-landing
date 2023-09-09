import { AxiosRequestConfig, AxiosResponse } from "axios";
import { instance } from "./axios";
import LocalStorageComponent from "../components/LocalStorageComponents";
export const httpGet = async <T>(
  requestPath: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const token = LocalStorageComponent.getItemLocally("token");
  const axiosResponse: AxiosResponse<T> = await instance.get(requestPath, {
    headers: {
      Authorization: "Bearer " + token,
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpPost = async <T>(
  requestPath: string,
  data: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const token = LocalStorageComponent.getItemLocally("token");
  const axiosResponse = await instance.post(requestPath, data, {
    headers: {
      Authorization: "Bearer " + token,
    },
    ...config,
  });
  return axiosResponse.data;
};

export const httpPut = async <T>(
  requestPath: string,
  data: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const token = LocalStorageComponent.getItemLocally("token");
  const axiosResponse: AxiosResponse<T> = await instance.put(
    requestPath,
    data,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
      ...config,
    },
  );
  return axiosResponse.data;
};

export const httpDelete = async <T>(
  requestPath: string,
  data: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const token = LocalStorageComponent.getItemLocally("token");
  const axiosResponse: AxiosResponse<T> = await instance.delete(requestPath, {
    headers: {
      Authorization: "Bearer " + token,
    },
    ...config,
    data: data,
  });
  return axiosResponse.data;
};
