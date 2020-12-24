import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ServiceapiService} from 'src/app/serviceapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ajax:ServiceapiService) { }
  public tk:string='';
  userForm={
    userName:'',
    password:''
  };

  ngOnInit(): void {
    
  }
saveUser(){
  this.ajax.post('/authenticate',this.userForm).subscribe((data)=>{
    this.appendToken(data);
  },
 (error:any)=>{
   alert(error.message);
 }
    );
}
public appendToken(tokens:any){
let token:string=tokens;
token="Bearer "+token;
this.tk=token;
this.ajax.get('/user',token).subscribe((data:any)=>{
  alert(data);
},
(error:any)=>{
  alert(error.message);
}
);
}
}
