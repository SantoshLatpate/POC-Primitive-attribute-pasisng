import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-demo-label',
  templateUrl: './demo-label.component.html',
  styleUrls: ['./demo-label.component.css']
})
export class DemoLabelComponent implements OnInit {

  @Input() id:number;
  constructor(private renderer: Renderer2, private el: ElementRef) {
    console.log(" attributes --> ",this.el.nativeElement.attributes);
    this.id=0;
   }

  ngOnInit(): void {
    for(let i=0;i<this.el.nativeElement.attributes.length;i++){
      if(this.el.nativeElement.attributes[i].name == 'id')
      {
        this.id=this.el.nativeElement.attributes[i].value;
      }
    }
  }

}
