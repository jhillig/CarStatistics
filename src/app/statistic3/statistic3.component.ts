import { Component, ElementRef, PLATFORM_INITIALIZER, ViewChild, WritableSignal } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Statistic3Service } from '../statistic3.service';
import { NgIf } from '@angular/common';
import { show } from '../../main';

@Component({
  selector: 'app-statistic3',
  imports: [NgIf],
  templateUrl: './statistic3.component.html',
  styleUrl: './statistic3.component.css'
})
export class Statistic3Component {
  
  show:WritableSignal<number>;
  public chart:any; 
  m1:any = new Map(); //key = issue, value = count (of model)
  models:any=[""];
  issues:any=[""];
  //public data1:any=[""];
   //points1=[{}];
   //points2=[{}];
   ds:any=[]; //complete Dataset
   //d1:any;
   //d2:any;

   
   

 constructor(public statistic3service: Statistic3Service){
    console.log("in constructor()3...");
    this.models = this.statistic3service.getModelList();  
    this.issues = this.statistic3service.getIssueList();  
    //this.createData();
    this.show=show;
   }




async createData(){

this.ds.splice(0);
this.m1.clear();
var d = {};


  for(var i = 0; i < this.models.length; i++){
    console.log(this.models[i]);

    this.m1= await this.statistic3service.getAllIssuesByModelAsMap(this.models[i]);

  var point={};
  var points=[];
  

  for (const [key,value] of this.m1) {
    //console.log(this.models[i]+" key: "+ key + " value: " + value);
    point ={"x" : this.models[i],"y": key, "r": value} ;
    //console.log( point );
    points.push(point);
  }

    d={
    label: this.models[i],
    data: points,
    backgroundColor: 'rgba('+(Math.floor(Math.random() * (255 - 1)) + 1)+ ', '+(Math.floor(Math.random() * (255 - 1)) + 1)+', '+(Math.floor(Math.random() * (255 - 1)) + 1)+ ',0.31)'
  };

  this.ds.push(structuredClone(d));
   }  

await this.createChart()
}




async createChart(){
 
  if(this.chart){this.chart.destroy();}
 
   this.chart = new Chart("MyChart4", 
    {
    type: 'bubble',
    data: {
      datasets: this.ds
    },
    options:  {
      responsive: true,
      scales:{
        x: {
            type: 'category',
            labels: this.models,
        },//x
        y: {
          type: 'category',
          labels: this.issues
      }//y

    }//scales,
    }
  }//chart
  );

 
}//createChart
    

}
