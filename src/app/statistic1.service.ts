import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Statistic1Service {

  constructor() { }

getModelList(){

 var models:any= [];
 var  url = new URL('http://localhost:8080/ModelList');

     fetch(url)
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

 
/* */

async getCountOfModel(testmodel:String){


    var url = new URL('http://localhost:8080/CarsByModel?model='+testmodel);
    console.log("in getCountOfModel() mit "+ testmodel);
       
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
      
     return i;

}

//returns a map of a selected car, key=issue, value=count of issue
  async getAllIssuesByModelAsMap(testmodel:String){
  var url = new URL('http://localhost:8080/AllIssuesByModel?model='+testmodel);
  console.log("in getAllIssuesByModelAsMap() mit "+url);
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
