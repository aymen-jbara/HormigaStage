import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from "../service/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  status:boolean=false;
  root:boolean=false;
  constructor(private authservice : AuthServiceService,private router:Router ) { }

  ngOnInit(): void {
    this.status=this.authservice.IsAuth;
  }

  passt:string='';
  user:string=''
connect() {

  if (this.user == "user0" && this.passt == "password") {
    this.authservice.signIn().then(
      () => {
        this.status = this.authservice.IsAuth;
        // @ts-ignore
        document.getElementById('id01').style.display = 'none';
        this.router.navigate(['/formation']);
      }
    );
  }
  if (this.user == "admin0" && this.passt == "password") {
    this.authservice.signIn().then(
      () => {
        this.authservice.rootking();
        this.status = this.authservice.IsAuth;
        this.root=this.authservice.root;
        // @ts-ignore
        document.getElementById('id01').style.display = 'none';
        this.router.navigate(['/formation']);
      }
    );
  }
}


deconnect(){
  this.authservice.signOut();
  this.status=this.authservice.IsAuth;
  this.router.navigate(['/']);
  }


}
