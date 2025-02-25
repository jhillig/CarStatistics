import { Component, WritableSignal } from '@angular/core';
import { from, Observable } from 'rxjs';
import { signal } from "@angular/core";
import { show } from '../../main';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-menue',
  imports: [ NgClass],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.css'
})
export class MenueComponent {


show:WritableSignal<number>;
btnStyle1: any;
btnStyle2: any;
btnStyle3: any;
btnStyle4: any;
btnStyle5: any;

constructor(){
  this.show = show;
  this.btnStyle1 = 'btn-selected';
  this.btnStyle2 = 'btn-default';
  this.btnStyle3 = 'btn-default';
  this.btnStyle4 = 'btn-default';
  this.btnStyle5 = 'btn-default';
}


  item1(){
  show.set(1)
  console.log(`show value: ${show()}`)
  this.btnStyle1 = 'btn-selected';
  this.btnStyle2 = 'btn-default';
  this.btnStyle3 = 'btn-default';
  this.btnStyle4 = 'btn-default';
  this.btnStyle5 = 'btn-default';
  }

  item2(){
  show.set(2);
  console.log(`show value: ${show()}`)
  this.btnStyle1 = 'btn-default';
  this.btnStyle2 = 'btn-selected';
  this.btnStyle3 = 'btn-default';
  this.btnStyle4 = 'btn-default';
  this.btnStyle5 = 'btn-default';
  }

  item3(){
  show.set(3);
  console.log(`show value: ${show()}`)
  this.btnStyle1 = 'btn-default';
  this.btnStyle3 = 'btn-selected';
  this.btnStyle2 = 'btn-default';
  this.btnStyle4 = 'btn-default';
  this.btnStyle5 = 'btn-default';
  }

  item4(){
  show.set(4);
  console.log(`show value: ${show()}`)
  this.btnStyle1 = 'btn-default';
  this.btnStyle4 = 'btn-selected';
  this.btnStyle3 = 'btn-default';
  this.btnStyle5 = 'btn-default';
  this.btnStyle2 = 'btn-default';
    }


  item5(){
  show.set(5);
  console.log(`show value: ${show()}`)
  this.btnStyle1 = 'btn-default';
  this.btnStyle5 = 'btn-selected';
  this.btnStyle3 = 'btn-default';
  this.btnStyle4 = 'btn-default';
  this.btnStyle2 = 'btn-default';
  }
}
