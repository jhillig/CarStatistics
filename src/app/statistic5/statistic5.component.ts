import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Component, inject, WritableSignal } from '@angular/core';
import { show } from '../../main';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-statistic5',
  imports: [NgIf,CommonModule],
  templateUrl: './statistic5.component.html',
  styleUrl: './statistic5.component.css'
})


export class Statistic5Component {

  show: WritableSignal<number>;
  cars$: Observable<any> | undefined ;
  http = inject(HttpClient);
  url = 'http://localhost:8080/AllCars';

  constructor(){
    this.show=show;
    this.start();
  }
  
  start(){
    this.cars$ = this.http.get<any>(this.url);
  }
}
