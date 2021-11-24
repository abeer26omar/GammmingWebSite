import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class HttpHeadersInterceptor implements HttpInterceptor{
    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                // 'x-rapidapi-key': 'b082c54e188f4be98269dc6128bafbd1',
                // 'x-rapidapi-host': 'api.rawg.io/api',
                // 'Access-Control-Allow-Headers': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
            setParams: {
                key: 'b082c54e188f4be98269dc6128bafbd1'
            }
        });
        return next.handle(req);
    }
}