import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from '../login/page/page.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
