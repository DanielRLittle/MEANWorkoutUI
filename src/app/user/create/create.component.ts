import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared-module/services/auth-service.service';
import { FormControl, FormGroup} from '@angular/forms';
import { User, Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private serv: AuthServiceService) { }

  ngOnInit() {
  }

  createUserForm = new FormGroup({
    username: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    age: new FormControl('')
  });

  addUser() {
    const user: Iuser = this.createUserForm.value;
    this.serv.createUser(user).subscribe((x) =>{
      console.log("user added!");
    });
  }

}
