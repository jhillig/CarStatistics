import {  Component, ElementRef,  OnInit, ViewChild, WritableSignal,  } from '@angular/core';
import { Statistic1Service } from '../statistic1.service';
import Chart, { Color } from 'chart.js/auto';
import { NgIf } from '@angular/common';
import { show } from '../../main';
@Component({
  selector: 'app-statistic1',
  imports: [NgIf],
  templateUrl: './statistic1.component.html',
  styleUrl: './statistic1.component.css',
  
})


export class Statistic1Component implements OnInit{

  @ViewChild('mods1') mods1!: ElementRef;
  @ViewChild('mods2') mods2!: ElementRef;

    public chart: any;
    trim = 15;
    models:any=[""];
    testmodel1;
    testmodel2;
    countOfModel1:number; 
    countOfModel2:number;
    absolute:boolean=true;
    
    /*
    @Input()
    show:boolean=true;*/

  cnt1:any = [];
  issues2:any= [];
  cnt2:any = [];
  issues:any= [];
  show:WritableSignal<number>;

  m1:any = new Map(); //key = issue, value = count (of model 1)
  m2:any = new Map(); //key = issue, value = count (of model 2)

  ngOnInit() {
    console.log("in ngOnInit()1..."); 
    
   
     console.log("in show: "+show);
  }

  ngOnChanges(){
    console.log("in ngOnChange()1..."); 
 
     console.log("in show: "+show);
  }


  constructor(public statistic1service: Statistic1Service){
    console.log("in constructor1()...");
      this.show=show;
    this.models = statistic1service.getModelList();
     this.countOfModel1 = 1.0;
     this.countOfModel2 = 1.0;
     this.testmodel1 ='';
     this.testmodel2 ='';
    
    
     console.log("in show: "+show);
     }
/*
zeigeSignal(){
  this.show=show;
  console.log("Signal -->Signal show: "+show);  
  console.log("Signal -->property show: "+this.show);
}


  async chooseModel(item:any){

    console.log("in chooseItem: "+ item.value)
    this.testmodel=item;
    this.countOfModel = await this.statistic1service.getCountOfModel(item);
    console.log("count: " + this.countOfModel);
    await this.statistic1service.getAllIssuesByModel(item);
  
   //
 }  */  

 async chooseModel1(){

  console.log("in chooseItem: "+ this.mods1.nativeElement.value);
  this.testmodel1=this.mods1.nativeElement.value;

  this.countOfModel1 = await this.statistic1service.getCountOfModel(this.testmodel1);
  console.log("Anzahl : " + this.testmodel1 +":  " + this.countOfModel1);
  //await this.statistic1service.getAllIssuesByModel(this.testmodel1);
  this.m1.clear();
  this.m1 = await this.statistic1service.getAllIssuesByModelAsMap(this.testmodel1);


for (const [key, value] of this.m1) {
  console.log(`m1: ${key} --> ${value}`);
}


}    

async chooseModel2(){

 

  console.log("in chooseItem: "+ this.mods2.nativeElement.value);
  this.testmodel2=this.mods2.nativeElement.value;

  this.countOfModel2 = await this.statistic1service.getCountOfModel(this.testmodel2);
  console.log("count: " + this.countOfModel2);
  // await this.statistic1service.getAllIssuesByModel(this.testmodel2);
  this.m2.clear();
  this.m2 = await this.statistic1service.getAllIssuesByModelAsMap(this.testmodel2);

 
  for (const [key, value] of this.m2) {
    console.log(`m2:  ${key} --> ${value}`);
  }

 //
}    
 
//build an intersection of keys of both maps m1, m2 as an array issues[]
paintChart(){

  console.log("in paintChart()...");

  this.issues.splice(0);
  this.cnt1.splice(0);
  this.cnt2.splice(0);
  console.log("common issues (Startwert): " + this.issues+"-------------");

  for (const [key, value] of this.m1){
    if(this.m2.has(key)){
      this.issues.push(key);  
      }    
  }

  for(var i = 0; i < this.issues.length; i++){
    this.cnt1.push(this.m1.get(this.issues[i]));
    this.cnt2.push(this.m2.get(this.issues[i]));
   }  

  console.log("common issues: " + this.issues);
  console.log("cnt1: " + this.cnt1);
  console.log("cnt2: " + this.cnt2);
  
/*
  this.issues1.splice(0,this.issues1.length);
  this.cnt1.splice(0,this.cnt1.length);
 this.issues2.splice(0,this.issues2.length);
  this.cnt2.splice(0,this.cnt2.length);

  for (const [key, value] of this.m1){
    if(this.m2.has(key))
    {
      this.issues1.push(key);
      this.cnt1.push(value);
      this.issues2.push(key);
      this.cnt2.push(this.m2.get(key));
    }
    else
    {

    }
  }
    */

   this.createChart();
  }

//absolute=true/false
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

  getYData1(){
    if(this.absolute==true){
      return this.cnt1;
    }
    else{
      var array2 =[];

      var array1=this.cnt1.slice(); //Kopie
       
      for(var i = 0; i < array1.length; i++){
       array2.push(((array1[i])/this.countOfModel1)*100);
      }  
      return array2; 
    }

  }


 getYData2(){
    if(this.absolute==true){
      return this.cnt2;
    }
    else{
      var array =[];

      var array1=this.cnt2.slice(); //Kopie
       
      for(var i = 0; i < array1.length; i++){
       array.push(((array1[i])/this.countOfModel2)*100);  //relativ in percent
      }  
      return array; 
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
 



  
    this.chart = new Chart("MyChart", {
      type: 'bar', 
  
      data: {
          labels:this.issues.slice(0,this.trim) , 
          datasets: [ 
            {
            label: this.testmodel1, 
            borderColor: "red", 
            backgroundColor: 'rgba(55, 232, 58, 0.64)', 
            borderWidth:1, 
            data: this.getYData1().slice(0,this.trim) 
          }, 
          {
              label: this.testmodel2, 
              borderColor: "red", 
              backgroundColor: 'rgba(48, 143, 198, 0.84)', 
              borderWidth:1, 
              data: this.getYData2().slice(0,this.trim) 
            }]
      },
      options: {
        responsive: true,
        plugins: {
                 title: {
                    display: false,
                    text: "",
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
                  position: 'top',
                  align: 'center',
                  labels: {
                     color: 'black',
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
