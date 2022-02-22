import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HomeService} from "../service/home.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {
  // @ts-ignore
  selectof:'éteint';
  constructor( private homeservice: HomeService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const namefor=form.value['name'];
    const cont=form.value['nameC'];
    const statu=form.value['status'];
    alert(namefor+cont+statu);
    this.homeservice.addForm(namefor,cont,statu)
    this.router.navigate(['/formation']);
  }
}
