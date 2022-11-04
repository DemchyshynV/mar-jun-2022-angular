import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name='max'
  constructor() { }

  ngOnInit(): void {
  }
  sayHello():void{
    console.log('hello');
  }

}
