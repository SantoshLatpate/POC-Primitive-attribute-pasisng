import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-demo-input',
  templateUrl: './demo-input.component.html',
  styleUrls: ['./demo-input.component.css']
})
export class DemoInputComponent implements OnInit {

  //@ViewChild('inputElement', { static: false }) inputElement: ElementRef;
  @Input() attributes = [{name:"",value:""}];
  constructor(private elementRef: ElementRef,private renderer:Renderer2) {
    //this.inputElement = [];
   }

  ngOnInit(): void {
     this.attributes = this.elementRef.nativeElement.attributes;
     
  }
  }
  
  


function input() {
  throw new Error('Function not implemented.');
}

