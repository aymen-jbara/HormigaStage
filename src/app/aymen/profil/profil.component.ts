import { Component, OnInit } from '@angular/core';
import {HomeService} from "../service/home.service";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  // @ts-ignore
  list: any[] ;
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
    this.list=this.homeservice.list;
  }

}
