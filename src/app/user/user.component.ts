import { FormsModule } from '@angular/forms';
import {ServiceapiService} from 'src/app/serviceapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private ajax:ServiceapiService) { }
userForm={
  userName:"",
  password:"",
  age:"",
  userAccount:{
    accountNumber:"",
  balance:""
  }
};

  ngOnInit(): void {
  }
saveUser(){

  this.ajax.post('/user',this.userForm).subscribe((data:any)=>{
    alert(data);
  },
(error)=>{
  alert(error);
}
  );
  alert(this.userForm);
}
}
