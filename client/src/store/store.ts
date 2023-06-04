import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {
            let errorMessage = "Failed in login";
            if (error instanceof Error) {
              errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }

    async registration(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (error) {
            let errorMessage = "Failed in registration";
            if (error instanceof Error) {
              errorMessage = error.message;
            }
            console.log(errorMessage);
            // console.log(error.response?.data?.message);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({} as IUser);

        } catch (error) {
            let errorMessage = "Failed in logout";
            if (error instanceof Error) {
              errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
}