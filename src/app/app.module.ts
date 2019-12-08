import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { ProductTableComponent } from './components/productTable.component';
import { ProductFormComponent } from './components/productForm.component';


import { ModelModule } from './model/model.module';
import { CommonModule } from '@angular/common';
import { LogService, LogLevel } from './common/log.service';
import { ComponentsModule } from './components/components.module';


let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;
@NgModule({
    imports: [BrowserModule, FormsModule, 
        ReactiveFormsModule, ModelModule, CommonModule, ComponentsModule],
    bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }
