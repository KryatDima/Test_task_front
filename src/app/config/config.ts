import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class AppConfig {

    private static readonly apiPath = 'https://localhost:44395/';
    public static readonly productList = AppConfig.apiPath + 'products-list/';
    public static readonly product = AppConfig.apiPath + 'product/'
    
    private _config: { [key: string]: string };
  

    constructor() {
        this._config = {
            PathAPI: 'https://localhost:44395/'
        };
    }

    get setting(): { [key: string]: string } {
        return this._config;
    }

    get(key: any) {
        return this._config[key];
    }
};