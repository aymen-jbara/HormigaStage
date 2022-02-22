import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../service/home.service";
import {Subject} from "rxjs";
import {AuthServiceService} from "../service/auth-service.service";
import {AuthComponent} from "../auth/auth.component";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formation-home',
  templateUrl: './formation-home.component.html',
  styleUrls: ['./formation-home.component.scss']
})
export class FormationHomeComponent implements OnInit {
  constructor(private homeservice:HomeService,private auth:AuthServiceService,private router:Router) { }
  // @ts-ignore
  @Input() namefor:string;
  // @ts-ignore
  @Input() cont:string;
  // @ts-ignore
  @Input() statu:string;
  // @ts-ignore
  @Input() indexton:number;

  root=this.auth.root;

  ngOnInit(): void {
  }
  getcolor(){
    if (this.statu==='éteint'){
      return 'red';
    }return 'green';
  }
  etiendreindex(){
  this.homeservice.SwitchOnOne(this.indexton);
  }
  allumeindex(){
    this.homeservice.SwitchOfOne(this.indexton);
  }

  onSubmit(form: NgForm) {
    const namefor=form.value['name'];
    const cont=form.value['nameC'];
    const statu=form.value['status'];
    this.homeservice.addForm(namefor,cont,statu)
    this.router.navigate(['/profil']);
  }
  supform(){
    this.homeservice.DeliteForm(this.indexton);
  }
  addListform(){
    const namefor=this.namefor;

    this.homeservice.addList(namefor);
    this.router.navigate(['/profil']);
  }
}
