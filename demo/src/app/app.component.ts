import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
   
  val="technoElevate"

  isspecial:boolean=true
  c1="blue"
  c2="green"
  
  //attribute binding 
  
  colval=2;

  display(){
    console.log('i am the clicked event');
  }
  showdetails(){
    console.log('haii iam an app componet parent of parent');
    
  }
displayResult:any

}
