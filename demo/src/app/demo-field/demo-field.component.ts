import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-demo-field',
  templateUrl: './demo-field.component.html',
  styleUrls: ['./demo-field.component.css']
})
export class DemoFieldComponent implements OnInit {
   
  constructor(private elementRef: ElementRef,private renderer: Renderer2,) { }

  ngOnInit(): void {
    let Id=Math.floor((Math.random()*6)+1);
     console.log(" From field --- ",this.elementRef.nativeElement);
     let values = this.elementRef.nativeElement.childNodes;
     for(let i=1;i<values.length;i++){
         if(values[i].tagName =="LABEL")
           this.renderer.setProperty(values[i],"for",Id);
         
           
            this.renderer.setProperty(values[i],"id",Id);
     }
  }

}
