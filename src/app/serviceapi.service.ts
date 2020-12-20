import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post(this.url + path, params);
};
}
