import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Statistic4Service {

  constructor() { }

  async getAllIssuesAsMap(){
    var url = new URL('http://localhost:8080/IssueList');
    const m = new Map();
  
    if(URL.canParse(url)){
      console.log("URL "+url +" ist ok!");
    }
  
    await fetch(url)
      .then(response => response.json())
      .then(json => { 
        json.forEach((item: any) => {
          m.set(item.issueCode,item.count);
          })
      })
      
      .catch(error=>{ console.log("myFehler: "+error);
      })
      return m;//map
    }



}
