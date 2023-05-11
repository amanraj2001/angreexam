import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city, data, stat, user } from './model/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  arrdata1={} as data
  state:Array<stat>=[]
  city:Array<city>=[]
  constructor(private http:HttpClient) {


   }
  getdata():Observable<any>{
    return this.http.get('./assets/data.json')
  }

  id!:number
  avail:boolean=false
  userdata={} as user
  verifyuser(user:string,pass:string,data={} as data){
    console.log(typeof data);
    this.arrdata1=data

this.findstates()
    console.log(data.users);
    this.userdata=data.users.find(x=>(x.userName==user && x.password==pass && x.role=='admin') ) as user
    // console.log(this.userdata);
    if(this.userdata){
      this.avail=true
      console.log("afasf");


    }
    else{
      this.avail=false
    }




  }
  isloggedin(){
    return this.avail
  }

  findstates(){
   console.log(this.arrdata1.States);
   this.state=this.arrdata1.States
   console.log(this.state);

  }

  findCityByID(id:number){
  console.log(this.arrdata1.Cities.filter(x=>x.StateID==id));
    this.city=this.arrdata1.Cities.filter(x=>x.StateID==id)
  }


  pdata:any=[]
  pudata(data:any){
    this.pdata=data
  }
  delid!:number
  delete(i:number){
    this.delid=i

    // this.arrdata1.States.splice(i,1)
    this.pdata.splice(i,1)


  }
}
