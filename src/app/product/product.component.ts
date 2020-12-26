import { Component, OnInit } from '@angular/core';
import {ServiceapiService} from 'src/app/serviceapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router, private ajax:ServiceapiService) { }
product:any;
  ngOnInit(): void {

    
    this.ajax.getval('/product').subscribe((data:any)=>{
    this.product="http://localhost:8080"+data[0].image;

    },
    (error:any)=>{
      alert(error.status);
    }
    );
    
  }

logout(){
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
