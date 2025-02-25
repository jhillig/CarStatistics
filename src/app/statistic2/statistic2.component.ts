import { Component, ElementRef, OnInit, ViewChild, WritableSignal } from '@angular/core';
import { Statistic2Service } from '../statistic2.service';
import { Chart } from 'chart.js';
import { NgIf } from '@angular/common';
import { show } from '../../main';

@Component({
  selector: 'app-statistic2',
  imports: [NgIf],
  templateUrl: './statistic2.component.html',
  styleUrl: './statistic2.component.css'
})
export class Statistic2Component implements OnInit{

    @ViewChild('modsRef') modsRef!: ElementRef;
    @ViewChild('issuesRef') issuesRef!: ElementRef;

    //const show1:WritableSignal<number> ;
    public chart: any;
  trim = 10;
  models:any=[""];
  testmodel='';
  testissue='';
  issues:any=[""];
  countOfModel:number;
  absolute:boolean=true;
  show:WritableSignal<number>;

  ngOnInit() {
    console.log("in ngOnInit()2..."); 
   
  }


  ngOnChanges(){
    console.log("in ngOnChange()2..."); 
  }

constructor(public statistic2service: Statistic2Service){
  
 
    console.log("in constructor()2...");
    this.show=show;
 
    console.log("show: "+show);

     this.models = statistic2service.getModelList();
     this.countOfModel =1.0; 
          //this.issues = statistic2service.getIssueList("Renault Megane3");

     //this.issues=this.statistic2service.getAllIssuesByModel(this.testmodel);
         }

         async chooseModel(){

          console.log("in chooseItem: "+ this.modsRef.nativeElement.value);
          this.testmodel=this.modsRef.nativeElement.value;
          this.countOfModel = await this.statistic2service.getCountOfModel(this.testmodel);
          console.log("count: " + this.countOfModel); 
          this.issues=this.statistic2service.getIssueList(this.testmodel).sort();
          
        }    
         

  async chooseIssue(){

    this.testissue=this.issuesRef.nativeElement.value;
    await this.statistic2service.getCountOfIssuesByModel(this.testmodel, this.testissue) ;
  }

  async start(){
    
    this.createChart();

  }


  toggle(str: String){
    console.log("str: " + str);
    if(str=="absolute"){
      this.absolute=true;
    }
    else{
      this.absolute=false;
    }
    console.log(this.absolute);  
  }

  getXData(){
    if(this.absolute==true){
      return this.statistic2service.cnt;
    }
    else{
      var array2 =[];

      var array1=this.statistic2service.cnt.slice(); //Kopie
       
      for(var i = 0; i < array1.length; i++){
       array2.push(((array1[i])/this.countOfModel)*100);
      }  
      return array2; 
    }

  }


  createChart(){
 
    console.log("in createChart()...");

    if(this.chart){
      console.log("chart existiert");
      this.chart.destroy();
     
    }
    else{ 
      console.log("chart existiert nicht");

    }



  
    this.chart = new Chart("MyChart2", {
      type: 'bar', 
  
      data: {
          labels:this.statistic2service.year.slice(0,this.trim) , 
          datasets: [ {
            label: this.testmodel, 
            borderColor: "red", 
            backgroundColor:'#9BD0F5', 
            borderWidth:1, 
            data: this.getXData().slice(0,this.trim) } ]
      },
      options: {
        responsive: true,
        plugins: {
                 title: {
                    display: true,
                    text: this.testmodel+" - "+this.testissue,
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
                  display: true,
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
