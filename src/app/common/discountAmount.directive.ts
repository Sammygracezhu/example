import { Directive, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef, Input, SimpleChange } from "@angular/core";
import { DiscountService } from './discount.service';
import { of } from 'rxjs';

@Directive({
    selector:"td[pa-price]",
    exportAs:"discount"
})
export class PaDiscountAmountDirective{
    private differ: KeyValueDiffer<any, any>;

    constructor(private keyValueDiffers: KeyValueDiffers,
         private changeDector: ChangeDetectorRef,
         private discount:DiscountService){}

         @Input("pa-price")
         originalPrice: number;

         discountAmount: number;

         ngOnInit(){
             this.differ = 
                this.keyValueDiffers.find(this.discount).create();

         }

         ngOnChanges(changes:{[property:string]:SimpleChange}){
             if(changes["originalPrice"] != null){
                 this.updateValue();
             }
         }
         ngDoCheck(){
             if(this.differ.diff(this.discount) != null){
                 this.updateValue();
             }
         }

         private updateValue(){
             this.discountAmount = this.originalPrice 
                - this.discount.applyDiscount(this.originalPrice);
         }
}