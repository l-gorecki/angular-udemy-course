import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // native is shadowDOM
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy, AfterViewInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') para: ElementRef;

  constructor() { console.log('constructor called'); }

ngOnChanges(changes: SimpleChanges) {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log('ngOnChanges called');
  console.log(changes);
}

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('text content (onInit): ' + this.header.nativeElement.textContent);
    console.log('paragraph content (onInit): ' + this.para.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('text content (afterContentInit): ' + this.header.nativeElement.textContent);
    console.log('paragraph content (afterContentInit): ' + this.para.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('text content (afterViewInit): ' + this.header.nativeElement.textContent);
  }

  // etc

  ngOnDestroy() {
    console.log('ngOnDestry called');
  }
}
