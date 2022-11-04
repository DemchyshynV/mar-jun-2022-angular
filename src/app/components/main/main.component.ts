import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, OnDestroy {
  @Input()
  value = 'first'

  @ViewChild('ipt')
  ipt: ElementRef;

  @ViewChild(ChildComponent)
  child: ChildComponent


  constructor(private detectorRef: ChangeDetectorRef) {
    console.log('constructor');
    console.log(this.value);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterViewInit(): void {
    console.log(this.ipt.nativeElement);
    this.child.name = 'Olha'
    this.detectorRef.detectChanges()
    // throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(this.value);
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.value);
  }


  changeValue(): void {
    this.child.name = this.ipt.nativeElement.value
  }
}
