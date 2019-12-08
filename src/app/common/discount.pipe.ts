import { Pipe } from "@angular/core";
import { NumberFormatStyle } from '@angular/common';
import { DiscountService } from './discount.service';

@Pipe({
    name:"discount",
    pure:false
})
export class PaDiscountPipe{
    constructor(private discount: DiscountService){}

    transform(price:number): number{
        //console.log("PaDiscountPipe has been called.");
        return this.discount.applyDiscount(price);
    }
}