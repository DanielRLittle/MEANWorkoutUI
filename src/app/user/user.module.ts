import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared-module/services/auth-service.service';
import { ReadOneComponent } from './read-one/read-one.component';



@NgModule({
  declarations: [CreateComponent, ReadOneComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateComponent,
    ReadOneComponent
  ],
  providers: [
    AuthServiceService
  ]
})
export class UserModule { }
