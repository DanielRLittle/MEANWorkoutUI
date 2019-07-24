import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared-module/services/auth-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Iuser } from '../interfaces/iuser';

@Component({
  selector: 'app-read-one',
  templateUrl: './read-one.component.html',
  styleUrls: ['./read-one.component.scss']
})
export class ReadOneComponent implements OnInit {

  constructor(private serv: AuthServiceService) { }

  ngOnInit() {
  }

  oneUser: Iuser;
  userKeys: string[];

  loginForm = new FormGroup({
    username: new FormControl('')
  });

  findUser() {
    this.serv.getOneUser(this.loginForm.value).subscribe((x) =>{
      console.log(x);
      this.oneUser = x;
      this.userKeys = Object.keys(x || {});
    });
  }

  findAll() {
    this.serv.getAllUsers().subscribe((x) =>{
      console.log(x);
    });
  }

}
