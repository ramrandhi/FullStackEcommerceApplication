import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('sidenav') sidenav!: ElementRef;

  closeNav() {
    if (this.sidenav.nativeElement) {
      this.sidenav.nativeElement.style.width = '0';
    }
  }

  openNav() {
    if (this.sidenav.nativeElement) {
      this.sidenav.nativeElement.style.width = '250px';
    }
  }

}
