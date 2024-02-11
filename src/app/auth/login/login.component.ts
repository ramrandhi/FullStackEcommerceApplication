import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    console.log('geelo');
  }

  submitLoginInfo(){
    console.log("hello");
    this.router.navigateByUrl('/app/dashboard');
  }

}
