import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean=false
  showme(){
     if (this.flag===true){
      this.flag=false
     }else{
       this.flag=true} 
  }

  users=[
    {name:'srinivas',age:22},
    {name:'naveen',age:22},
    {name:'charan',age:22},
    {name:'harsha',age:22} 
  ]

  selectedCountry='ind'
  title = 'demo';
}
