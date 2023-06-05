import $api from "../http";
import { AxiosResponse } from 'axios';
import { IUser } from "../models/IUser";

export default class AuthService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        console.log("777777777777777777777")
        const tmp = $api.get('/users');
        // const tmp = $api.interceptors.response.use('/users');
        console.log('tmp', tmp);
        return tmp;
        // return $api.get<IUser[]>('/users');
    }              
}