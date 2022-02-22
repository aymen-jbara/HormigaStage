import { Component, OnInit } from '@angular/core';
import {HomeService} from "../service/home.service";
import {AuthServiceService} from "../service/auth-service.service";

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

// @ts-ignore
  formations:any[];
  constructor(private homeservice: HomeService,private auth:AuthServiceService) { }
root=this.auth.root;
  ngOnInit(): void {
    this.formations=this.homeservice.formations;
  }
allumeForm(){
    this.homeservice.allumeTout();
}
etiendreForm(){
    this.homeservice.eteintTout();
}
}
