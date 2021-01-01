import { Component, OnInit } from '@angular/core';
import {ServiceapiService} from 'src/app/serviceapi.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private router: Router, private ajax:ServiceapiService, private sanitizer: DomSanitizer, private httpClient:HttpClient ) { }
product:any;
  ngOnInit(): void {
  console.log('on Initi in Product');

      
    
    this.ajax.getval('/product').subscribe((data:any)=>{
	    //Approach 1, convert Image to Base64 string and send it part of json
	    this.product=this.sanitizer.bypassSecurityTrustUrl('data:image/jpeg;base64, ' + data[0].image);
    
	     //Approach 2, a separate service which send the Image as MediaType JPEG, then we render the image on the UI
	    //this.createImageFromBlob(data[0].image);
	    //this.getImage("http://localhost:8080/product/image/2").subscribe((data:any) => {
	    	//	this.createImageFromBlob(data);
	    	//},
	    	//(error:any)=>{
	    	//  alert(error.status);
	    	//}
		    //);
		    //console.log(this.product)
    	},
    	(error:any)=>{
      		alert(error.status);
    	}
    );
    
  }
 
  getImage(imageUrl: string): Observable<Blob> {
  	return this.httpClient.get(imageUrl, { responseType: 'blob' });
	}

	imageToShow: any;

	createImageFromBlob(image: Blob) {
		console.log("creatign image");
		console.log(image);
   		let reader = new FileReader();
  	reader.addEventListener("load", () => {
      this.product = reader.result;
   	}, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}





logout(){
  localStorage.clear();
  this.router.navigate(['/login']);
}

}
