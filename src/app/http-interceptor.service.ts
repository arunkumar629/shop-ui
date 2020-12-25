import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    constructor(private router: Router, private common: CommonService) { }
    //
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //
        let token = localStorage.getItem('token');
        let headers = null;

        if (token) {
            headers = new HttpHeaders({
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": `Bearer ${token}`,
            });
        } else {
            headers = new HttpHeaders({
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            });
        }
        const requestChange = req.clone({ headers });
        //console.log(requestChange);
        return next.handle(requestChange).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    console.log('this is client side error');
                    errorMsg = `Error: ${error.error.message}`;
                } else {
                    console.log('this is server side error');
                    errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
                    if (error.status == 401 && error.statusText == 'Unauthorized') {
                        localStorage.clear();
                        this.common.showNotification("error", "Session Expired! Please login again.");
                        this.router.navigate(['/']);
                    }
                }
                console.log(errorMsg);
                return throwError(errorMsg);
            })
        );
    }


}
