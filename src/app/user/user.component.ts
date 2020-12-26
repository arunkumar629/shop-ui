import { FormsModule } from '@angular/forms';
import {ServiceapiService} from 'src/app/serviceapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router,private ajax:ServiceapiService) { }
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
  //alert(this.userForm.userAccount.accountNumber);
  this.ajax.post('/user',this.userForm).subscribe((data:any)=>{
    alert("user added successfully");
  },
(error:any)=>{
  alert(error.status);
}
  );
  this.router.navigate(['/login']);

}
}
