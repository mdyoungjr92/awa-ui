import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

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
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule
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
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule
  ],
  declarations: []
})
export class AwaMaterialModule { }
