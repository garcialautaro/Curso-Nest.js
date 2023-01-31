import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { AxiosInstance} from 'axios';
import axios from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter{
    
    private axios: AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
            const { data } = await this.axios.get<T>(url);
            return data;
        } catch(err) {
            console.log(err);
            throw new Error(`Ha ocurrido un error`);
        }
    }
}