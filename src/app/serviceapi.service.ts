
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {
url='';
  constructor(private http: HttpClient) {
this.url=api.url;
   }
   post(path: string, params?: any) {

    
    return this.http.post(this.url + path, params,{  responseType: 'text' as 'json' });
}
get(path: string,token:string) {
  let headers = new HttpHeaders().set('Authorization', token).set( 'Content-Type',  'application/json').set('Access-Control-Allow-Origin', '*');
  return this.http.get(this.url + path,{headers});
}
getval(path:string){
  return this.http.get(this.url + path);
}
}


