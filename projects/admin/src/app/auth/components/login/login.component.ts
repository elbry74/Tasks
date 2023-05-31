import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder ,
    private service:LoginService ,
    private toaster:ToastrService,
    private router:Router
    ) { }

  loginform!:FormGroup
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.loginform = this.fb.group({
      email:['', [Validators.required , Validators.email]],
      password:['', [Validators.required , Validators.maxLength(5) , Validators.minLength(20)]],
      role:['admin']
    })
  }

  login(){
    this.service.login(this.loginform.value).subscribe(res =>{
      this.toaster.success("success" , "Login Success")
      this.router.navigate(['/tasks'])
    }, error => {
      this.toaster.error(error.error)
    }) 
  }
}
