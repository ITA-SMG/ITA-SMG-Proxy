import { Injectable } from '@nestjs/common';
import { AxiosResponse, HttpClient } from '../types/utils.types';
import axios, { AxiosError, AxiosInstance, AxiosResponse as ExternalAxiosResponse } from 'axios';

@Injectable()
export class HttpClientImpl implements HttpClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.SMG_API_ADDRESS,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private static async doRequest<Response>(
        callback: () => Promise<ExternalAxiosResponse<Response>>
    ): Promise<AxiosResponse<Response>> {
        try {
            const result = await callback();

            return {
                status: result.status,
                data: result.data,
            };
        } catch (e) {
            const error = e as AxiosError;

            return {
                status: error.response?.status ?? 500,
                data: error.response?.data,
                error:
                    error.response?.data?.message?.length != 0
                        ? error.response.data.message
                        : error.response?.data?.error?.length != 0
                        ? error.response.data.error
                        : error.message,
            };
        }
    }

    async get<Response, Headers>(endpoint: string, headers?: Headers): Promise<AxiosResponse<Response>> {
        return HttpClientImpl.doRequest(() =>
            this.client.get(endpoint, {
                headers,
            })
        );
    }

    async post<T, K, R>(endpoint: string, headers?: T, body?: K): Promise<AxiosResponse<R>> {
        return HttpClientImpl.doRequest(() =>
            this.client.post(endpoint, body, {
                headers,
            })
        );
    }
}
