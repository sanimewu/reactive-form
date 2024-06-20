import {Component, input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserformService} from "../userform.service";

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.scss'
})
export class UserformComponent implements OnInit{
  userArray:any[]=[];
  userArrayWeb:any[]=[];
  constructor(private userformService:UserformService) {
    this.getUser();
  }
  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
    })
  }

  userForm: FormGroup  = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email:  new FormControl('')
  });

  getUser(){
    const body = {
      id:this.userForm.get('id')?.value,
      name:this.userForm.get('name')?.value,
      username:this.userForm.get('username')?.value,
      email:this.userForm.get('email')?.value,
    }
    this.userformService.getUser(body).subscribe(response=>{
      this.userArray = response;
    })

  }
  onSaveUser() {
    const body = {
      id:this.userForm.get('id')?.value,
      name:this.userForm.get('name')?.value,
      username:this.userForm.get('username')?.value,
      email:this.userForm.get('email')?.value,
    }
    this.userformService.onSaveUser(body).subscribe(response => {
      this.userArrayWeb = response;
    });

  }

  onclick(){


  };
}
