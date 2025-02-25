import { Component, WritableSignal } from '@angular/core';
import { Statistic4Service } from '../statistic4.service';
import { Chart } from 'chart.js';
import { show } from '../../main';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-statistic4',
  imports: [NgIf],
  templateUrl: './statistic4.component.html',
  styleUrl: './statistic4.component.css'
})
export class Statistic4Component {

  public chart:any; 
  m:any = new Map(); //key = issue, value = count (of model)
  cnt:any=[];
  issues:any=[];
  show:WritableSignal<number>;

 constructor(public statistic4service: Statistic4Service){
    console.log("in constructor()4...");  
      this.show=show;
      this.createData();
   }

async createData(){
  this.m.clear();
  this.m = await this.statistic4service.getAllIssuesAsMap();
  this.issues.splice(0);
  this.cnt.splice(0);
  //console.log(this.m);

  for (let [key,value] of this.m) {
     this.issues.push(key);
    this.cnt.push(value);
  }
   
console.log(this.issues);
console.log(this.cnt);
this.createChart();
}


  createChart(){
 
    console.log("in createChart()4...");

    if(this.chart){
      console.log("chart existiert");
      this.chart.destroy();
    }
    else{ 
      console.log("chart existiert nicht");
    }

    this.chart = new Chart("MyChart5", {
      type: 'bar', 
  
      data: {
          labels:this.issues , 
          datasets: [ {
            label: '', 
            borderColor: "red", 
            backgroundColor:'#9BD0F5', 
            borderWidth:1, 
            data: this.cnt } ]
      },
      options: {
        responsive: true,
        plugins: {
                 title: {
                    display: true,
                    text: 'Häufigkeit aller Mängel über alle Fahrzeuge',
                    color: 'navy',
                    position: 'top',
                    align: 'center',
                    font: {
                       weight: 'bold'
                    },
                    padding: 8,
                    fullSize: true,
                 },
  
                 legend: {
                  display: false,
                  position: 'bottom',
                  align: 'center',
                  labels: {
                     color: 'darkred',
                     font: {
                        weight: 'bold'
                     },
                  }
               }  
              }
  
     },
     });
  
   //this. chart.update(); 
   
  }
  

}
