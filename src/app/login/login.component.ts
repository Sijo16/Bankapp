import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// executes 3rd.
export class LoginComponent implements OnInit {

  //String interpolation{{}}
  aim="your perfect banking partner"

//property binding [property]
  account = "Enter your account"

  acno='';
  pswd='';

//class -collection of properties and methods
//properties/variables
//user-defined methods .(executes 4th)
userDetails:any={
  1000:{acno:1000,username:'sanil',password:1000,balance:10000},
  1001:{acno:1000,username:'Aravind',password:1001,balance:12000},
  1002:{acno:1000,username:'Joice',password:1002,balance:20000},
}

//executes first.
  constructor()//Automatically invoke when the object is created.
  {

  }

//executes second.
  ngOnInit(): void {
    //For initial process of component.
    //Lifecycle hook of the angular.
  }





  //$event binding
  // acnoChange(event:any)
  // {
  //   this.acno = event.target.value;
  //   console.log(this.acno);

  // }

  // pswdChange(event:any)
  // {
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);

  // }

 //event binding
 loginFn(a:any,p:any){
  // alert("Login Clicked")
var acno=a.value;
var pswd =p.value;
var userDetails=this.userDetails;

if(acno in userDetails)
{
    if(pswd==userDetails[acno].password)
    {
      alert("Login Successfully");
    }
    else
    {
      alert("Invalid password");
    }
}
else
{
  alert("invaild User details");
}

}




}
