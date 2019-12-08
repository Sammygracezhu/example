import { Directive, ElementRef, Attribute, Input, OnInit, OnChanges, SimpleChange, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { Product } from '../model/product.model';





@Directive({
    selector:"[pa-attr]",
})
export class PaAttrDirective{
    constructor(private elementRef: ElementRef){
        this.elementRef.nativeElement.addEventListener("click", e=>{
            if(this.product!=null){
                this.click.emit(this.product.category);
            }
        });
    }

    @Input("pa-attr")
    @HostBinding("class")
    bgClass:string;

    @Input("pa-product")
    product:Product;

    @Output("pa-category")
    click = new EventEmitter<string>();

    @HostListener("click")
    triggerCustomerEvent(){
        if(this.product !=null){
            this.click.emit(this.product.category);
        }
    }
    ngOnInit(){
       // this.elementRef.nativeElement.classList.add(this.bgClass || "bg-success",
        //"text-white");
    }
  /*
    ngOnChanges(changes:{[property:string]:SimpleChange}){
      let change = changes["bgClass"];
      let classList = this.elementRef.nativeElement.classList;

      if(!change.isFirstChange() && classList.contains(change.previousValue)){
          classList.remove(change.previousValue);
      }
      if(!classList.contains(change.currentValue)){
          classList.add(change.currentValue);
      }
    }*/

}