import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[attributesMaker]'
})
export class  AttributesMaker implements OnInit {

 @Input() attributesVal =[{name:"",value:""}];
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    for(let i=1; i< this.attributesVal.length-1; i++){
        this.renderer.setProperty(this.el.nativeElement,this.attributesVal[i].name,this.attributesVal[i].value);
    }
    console.log(this.attributesVal);
  }
}