import { Component, OnInit } from '@angular/core';
import { CompaniesService } from './companies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hhfront';

  logged = false;
  username = '';
  password = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if(token) {
      this.logged = true;
    }
  }

  constructor(private companiesService: CompaniesService) {}

  login() {
    this.companiesService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
}
