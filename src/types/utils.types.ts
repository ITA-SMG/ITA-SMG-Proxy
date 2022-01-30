import { StatusWrapper } from './common.types';

export type AxiosResponse<T> = StatusWrapper<number, string> & {
    data: T;
};

export interface HttpClient {
    get<Response, Headers>(endpoint: string, headers?: Headers): Promise<AxiosResponse<Response>>;
    post<Response, Headers, Body>(endpoint: string, headers?: Headers, body?: Body): Promise<AxiosResponse<Response>>;
}
