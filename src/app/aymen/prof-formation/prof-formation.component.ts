import {Component, Input, OnInit} from '@angular/core';
import {HomeService} from "../service/home.service";

@Component({
  selector: 'app-prof-formation',
  templateUrl: './prof-formation.component.html',
  styleUrls: ['./prof-formation.component.scss']
})
export class ProfFormationComponent implements OnInit {
  // @ts-ignore
  @Input() namefor:string;
  // @ts-ignore
  @Input() cont:string;
  // @ts-ignore
  @Input() statu:string;
  // @ts-ignore
  @Input() indexton:number;
  constructor(private homeservice:HomeService) { }

  ngOnInit(): void {
  }

}
