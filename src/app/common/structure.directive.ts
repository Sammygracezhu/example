import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges, SimpleChange } from "@angular/core";

@Directive({
    selector:'[paIf]'
})
export class PaStructureDirective implements OnChanges{
    constructor(private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<Object>){}
    
    @Input("paIf")
    expressionResult:boolean;

 
    ngOnChanges(changes:{[property:string]:SimpleChange}){
      let change = changes["expressionResult"];
      if(!change.isFirstChange() && !change.currentValue){
          console.log("change.isFirstChange() : "+ change.isFirstChange());
          this.viewContainerRef.clear();
      }
      else if(change.currentValue){
          this.viewContainerRef.createEmbeddedView(this.templateRef);
      }

    }


}