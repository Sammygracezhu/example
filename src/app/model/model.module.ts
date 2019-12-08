import { SimpleDataSource } from "./datasource.model";
import { Model } from './repository.model';
import { NgModule } from '@angular/core';

@NgModule({
    providers:[Model, SimpleDataSource]
})
export class ModelModule{}