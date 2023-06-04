import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import axios from "axios";
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
            console.log("login response", response);
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
            console.log("registration response", response);
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
            console.log("logout response", response);
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

    async checkAuth() {
        try {
            const response = await AuthService.checkAuth();
        } catch (error) {
            let errorMessage = "Failed in checkAuth";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            console.log(errorMessage);
        }
    }
}