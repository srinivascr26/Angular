import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  @Input()valueChild
  constructor() { }

  ngOnInit(): void {
  }

}
