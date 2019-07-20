import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared-module/services/auth-service.service';



@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateComponent
  ],
  providers: [
    AuthServiceService
  ]
})
export class UserModule { }
