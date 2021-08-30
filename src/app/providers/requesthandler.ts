import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';import { Observable } from 'rxjs';

@Injectable()
export class RequestHandler {
    _base: string = 'https://varaidzo-transformer-oil-monit.herokuapp.com';
    base: string = this._base + '';

    constructor(private _http: HttpClient) {

    }

    public get(url: string, func: any, error?: any): void {
        this.execute(this._http.get(this.base + url, this.getOptions()), func, error);
    }

    public post(url: string, data: any, func: any, error?: any): void {
        this.execute(this._http.post(this.base + url, data, this.getOptions()), func, error);
    }

    public update(url: string, data: any, func: any, error?: any): void {
        this.execute(this._http.put(this.base + url, data, this.getOptions()), func, error);
    }

    public delete(url: string, func: any, error?: any): void {
        this.execute(this._http.delete(this.base + url, this.getOptions()), func, error);
    }

    public login(data: any, func: any, error?: any): void {
        var headers = {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        };
        const body = new HttpParams()
            .set('grant_type', 'password')
            .set('username', data.username)
            .set('password', data.password);
        this.execute(this._http.post(this._base + 'api/login', body.toString(), headers), func, error);
    }

    private execute(action: Observable<any>, func: any, error?: any) {
        action.subscribe(res => {
            func(res);
        }, e => {
            if (error) error(e);
            else console.log(e, error);
        });
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(localStorage.getItem("token"))
            })
        };
    }
}