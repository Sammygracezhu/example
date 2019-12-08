import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditoryComponent } from './discountEditor.component';
import { ProductFormComponent } from './productForm.component';
import { ProductTableComponent } from './productTable.component';
import { ProductFormControl } from '../model/form.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module';

@NgModule({
    imports:[BrowserModule, FormsModule, ReactiveFormsModule,CommonModule],
    declarations:[PaDiscountDisplayComponent, PaDiscountEditoryComponent,
       ProductFormComponent, ProductTableComponent],
    exports:[ProductFormComponent, ProductTableComponent]
})
export class ComponentsModule{}