import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Statistic3Service {

  constructor() { }

  getModelList(){

    var models:any= [];
    var  url = new URL('http://localhost:8080/ModelList');
   
        fetch(url)
       .then(response => response.json())
       .then(json => { 
               
         json.forEach((item: any) => {
         models.push(item.carMod);
        //console.log("fetch ok ");
        models.sort();
         })
       })
       .catch(error=>{ console.log("myFehler: "+error);
       })
         return models;
     }

     getIssueList(){

      var issues:any= [];
      var  url = new URL('http://localhost:8080/IssueList');
     
          fetch(url)
         .then(response => response.json())
         .then(json => { 
                 
           json.forEach((item: any) => {
           issues.push(item.issueCode);
          //console.log("fetch ok ");
          issues.sort();
           })
         })
         .catch(error=>{ console.log("myFehler: "+error);
         })
           return issues;
       }
  



     async getAllIssuesByModelAsMap(testmodel:String){
      var url = new URL('http://localhost:8080/AllIssuesByModel?model='+testmodel);
      const m1 = new Map();
    
      if(URL.canParse(url)){
        console.log("URL "+url +" ist ok!");
      }
    
      await fetch(url)
        .then(response => response.json())
        .then(json => { 
                
          json.forEach((item: any) => {
         m1.set(item.issueCode,item.count);
         console.log("fetch und map ok ");
          })
        })
        
        .catch(error=>{ console.log("myFehler: "+error);
        })
    
        return m1;//map
      }




}
