import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ICar} from '../../interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;

  @Output()
  carForUpdate = new EventEmitter<ICar>();

  @Output()
  carIdForDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  update(): void {
    this.carForUpdate.emit(this.car)
  }

  delete(): void {
    this.carIdForDelete.emit(this.car.id);
  }
}
