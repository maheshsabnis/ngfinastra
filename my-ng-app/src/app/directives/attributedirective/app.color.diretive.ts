import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

// [setcolor]: te durective will be used for property binding
@Directive({
  selector: '[setcolor]',
})
export class ColorDirective {
  // map the setcolor property to the directive selector
  // so that when the directive is used byn component the
  // value passed by component will be assigned to the 'setcolor' property
  // of the directive class
   @Input('setcolor') setcolor:string;
   // inject ElementRef and Renderer2 for targetiing the DOM element for applying directive
   // and defining rendering of it
   // these classes will be resolved by BrowserModule
   constructor(private ele:ElementRef, private render:Renderer2){
      this.setcolor  ='';
   }

   // biz logic method
   private applyColor(color:string): void {
     // set the style of the HTML element and rendere it
      this.render.setStyle(this.ele.nativeElement, "backgroundColor", color);
   }

   // bind methods to the JS DOM events
   // so that when the DOM element on which the directive is applied
   // raises these events, the methods applied with HostListener() will be
   // invoked
   @HostListener('mouseenter')
   onMouseEnter():void{
     this.applyColor(this.setcolor || 'cyan');
   }
   @HostListener('mouseleave')
   onMouseLeave():void{
     this.applyColor('')
   }

}
