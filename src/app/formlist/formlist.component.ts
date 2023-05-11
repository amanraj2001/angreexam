import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent {
  pusheddata:any=[]
    constructor(private demo:DataService) {
      this.pusheddata=this.demo.pdata
        console.log(this.pusheddata);

this.a=this.demo.avail
    }
    a!:boolean
    del(i:number){
        this.demo.delete(i)
    }
}
