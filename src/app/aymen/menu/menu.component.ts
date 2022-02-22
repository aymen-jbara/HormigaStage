import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../service/auth-service.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthServiceService) { }

  root=this.auth.root;
  ngOnInit(): void {
  }

}
