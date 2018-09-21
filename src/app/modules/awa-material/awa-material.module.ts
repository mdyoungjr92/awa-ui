import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule
  ],
  declarations: []
})
export class AwaMaterialModule { }
