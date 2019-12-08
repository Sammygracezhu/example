import { NgModule } from "@angular/core";
import { ModelModule } from '../model/model.module';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaAttrDirective } from './attr.directive';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';
import { PaDiscountPipe } from './discount.pipe';
import { PaDiscountAmountDirective } from './discountAmount.directive';
import { PaIteratorDirective } from './iterator.directive';
import { PaStructureDirective } from './structure.directive';
import { PaModel } from './twoway.directive';
import { PaDisplayValueDirective, VALUE_SERVICE } from './valueDisplay.directive';
import { LogService } from './log.service';
import { DiscountService } from './discount.service';

@NgModule({
    imports:[ModelModule],
        providers:[LogService, DiscountService,
    {
        provide: VALUE_SERVICE, useValue:"Apples"
    }],
    declarations:[PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe,
          PaCellColor, PaCellColorSwitcher, PaDiscountPipe,
          PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
          PaModel, PaDisplayValueDirective],
    exports:[PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe,
          PaCellColor, PaCellColorSwitcher, PaDiscountPipe,
          PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
           PaModel, PaDisplayValueDirective]
})
export class CommonModule{}