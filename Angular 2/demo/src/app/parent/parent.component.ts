import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  result:string
  getData(value){
    this.result=value
  }
  constructor() { }
  flag:boolean=true
  ngOnInit(): void {
  }

}
