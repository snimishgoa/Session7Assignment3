import { Directive, HostListener, ElementRef, Input } from "@angular/core"

@Directive({
  selector: '[tableRowHighlight]'
})
export class HighlightDirective{
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    if(this.el.nativeElement.rowIndex % 2 == 0){
      this.el.nativeElement.style.color = "green";
    }
    else{
      this.el.nativeElement.style.color = "red";
    }
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.color = "black";
  }
}