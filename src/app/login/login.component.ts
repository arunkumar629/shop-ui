import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ServiceapiService} from 'src/app/serviceapi.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private ajax:ServiceapiService, private common: CommonService) { }
  
  userForm={
    userName:'',
    password:''
  };

  ngOnInit(): void {
    
  }
saveUser(){
  this.ajax.post('/authenticate',this.userForm).subscribe((data)=>{
    this.router.navigate(['/']);
    this.appendToken(data);
  },
 (error:any)=>{
   alert(error.status);
//  this.common.showNotification("06","problem");
 }
    );
}
public appendToken(tokens:any){
let token:string=tokens;

localStorage.setItem('token',token);


}
}
