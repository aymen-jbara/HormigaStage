import { Injectable } from '@angular/core';


@Injectable()
export class HomeService {
  list=[{
    namefor:'java',}];
  formations =[
    {
      namefor:'java',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'active'
    },
    {

      namefor:'html',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'active'
    },
    {
      namefor:'JEE',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'éteint'

    },
    {
      namefor:'IOT',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'active'
    },
    {

      namefor:'C',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'active'
    },
    {

      namefor:'C++',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'éteint'
    },
    {

      namefor:'javaScript',
      cont:'irzjvpmjsdirhnvpimnsrv',
      statu:'éteint'

    },

  ]

  constructor() { }
  allumeTout() {
    for (let form of this.formations) {
      form.statu='active';
    }
  }

  eteintTout() {
    for (let form of this.formations) {
      form.statu='éteint';
    }
  }
  SwitchOnOne(i:number){
    this.formations[i].statu='active';
  }
  SwitchOfOne(i:number){
    this.formations[i].statu='éteint';
  }
  addForm(namefor:string,cont:string,statu:string){
  const HomeObject ={
    id:0,
    namefor:'',
    cont:'',
    statu:''
  };
    HomeObject.namefor=namefor;
    HomeObject.cont=cont;
    HomeObject.statu=statu;
    // @ts-ignore
    HomeObject.id=this.formations[(this.formations.length-1)].id + 1;
    // @ts-ignore
    this.formations.push(HomeObject);
  }
    DeliteForm(i:number){
      this.formations.splice(i, 1);
    }
  addList(namefor:string){
    const listObject ={
      id:0,
      namefor:''
    };
    listObject.namefor=namefor;
    // @ts-ignore
    listObject.id=this.list[(this.list.length-1)].id + 1;
    // @ts-ignore
    this.list.push(listObject);
  }

}
