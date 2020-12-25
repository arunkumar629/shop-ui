import { Injectable } from '@angular/core';
declare var Swal: any
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
    notiFy(status: string, msg: string) {
        Swal.fire({
            position: "center-middle",
            icon: status,
            title: msg,
            showConfirmButton: false,
            timer: 1500
        });
    }
    showNotification(status: string, msg: string) {
        let type = (status == "error") ? "Error" : "Success";
        Swal.fire(type, msg, status);
    }

}
