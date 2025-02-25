import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Statistic2Service {

  constructor() { }

  testyear='2012';
  testissue='P1';
  testmodel='';
  
 issues:any=[""];
 cnt:any=[""];
 year:any=[""];
  
 

  getModelList(){

    var models:any= [];
    var  url = new URL('http://localhost:8080/ModelList');
      
    if(URL.canParse(url)){
      console.log("URL "+url +" ist ok!");
    }

    fetch('http://localhost:8080/ModelList')
      .then(response => response.json())
      .then(json => { 
              
        json.forEach((item: any) => {
        models.push(item.carMod);
      console.log("fetch ok ");
      models.sort();
        })
      })
      .catch(error=>{ console.log("myFehler: "+error);
      })
    
      return models;

  }

  //
  async getIssueListByModel(testmodel:string) 
  {
   var url = new URL('http://localhost:8080/AllIssuesByModel?model='+testmodel);
   console.log("in getAllIssuesByModel() mit "+url);
 
   this.issues.splice(0,this.issues.length);
   this.cnt.splice(0,this.cnt.length);
 
 
   if(URL.canParse(url)){
     console.log("URL "+url +" ist ok!");
   }
 
    await fetch(url)
      .then(response => response.json())
      .then(json => { 
              
        json.forEach((item: any) => {
        this.issues.push(item.issueCode);
        this.cnt.push(item.count);
        console.log("fetch ok ");
        
        })
      })
      
      .catch(error=>{ console.log("myFehler: "+error);
      })
      
          for(let i=0; i<(this.issues.length);i++ ) {
          console.log("Service--->   Issue: "+this.issues[i]+"  "+this.cnt[i]);}
  }



 async getCountOfIssuesByModel(testmodel:string, testissue:string) 
   {
    var url = new URL('http://localhost:8080/CountOfIssuesByModelAndIssues?model='+testmodel+'&issue='+testissue);
     
    //this.issues.splice(0,this.issues.length);
    this.cnt.splice(0,this.cnt.length);
    this.year.splice(0,this.year.length);
  
    if(URL.canParse(url)){
      console.log("URL "+url +" ist ok!");
    }
  
   await fetch(url)
      .then(response => response.json())
      .then(json => { 
              
        json.forEach((item: any) => {
          this.year.push(item.year);
          this.cnt.push(item.count);
        })
      })
      
      .catch(error=>{ console.log("myFehler: "+error);
      })
      
        for(let i=0; i<(this.year.length);i++ ) {
          console.log("Service->  year: "+this.year[i]+"  "+this.cnt[i]);
        }
    }


    getIssueList(testmodel:string) 
    {
     
      var issues:any= [];
      var url = new URL('http://localhost:8080/AllIssuesByModel?model='+testmodel);
     console.log("in fetchAllIssuesByModel() mit "+url);
   
     issues.splice(0,this.issues.length);
       
     if(URL.canParse(url)){
       console.log("URL "+url +" ist ok!");
     }
   
     fetch(url)
       .then(response => response.json())
       .then(json => { 
               
         json.forEach((item: any) => {
          issues.push(item.issueCode);
         })
       })
       
       .catch(error=>{ console.log("myFehler: "+error);
       })
       
     
          for(let i=0; i<(this.issues.length);i++ ) {
           console.log("Issue: "+this.issues[i]+"  "+this.cnt[i]);
          }

          return issues.sort();     
   }
          
 
          async getCountOfModel(testmodel:String){


            var url = new URL('http://localhost:8080/CarsByModel?model='+testmodel);
            console.log("in fetchAllIssuesByModel() mit "+url);
          
            this.issues.splice(0,this.issues.length);
            this.cnt.splice(0,this.cnt.length);
          
          
            if(URL.canParse(url)){
              console.log("URL "+url +" ist ok!");
            }
          var i=0;
           await fetch(url)
              .then(response => response.json())
              .then(json => { 
                     
                json.forEach((item: any) => {
               i=i+1;
                console.log("fetch ok ");
               
                })
              })
              
              .catch(error=>{ console.log("myFehler: "+error);
              })
              
                for(let i=0; i<(this.issues.length);i++ ) {
                  console.log("Issue: "+this.issues[i]+"  "+this.cnt[i]);
                }
            return i;
        
        }


}
