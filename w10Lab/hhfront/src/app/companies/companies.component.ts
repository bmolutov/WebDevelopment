import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company, Vacancy } from '../models';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  target: number = -1;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companiesService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }

  getVacancies(id: number) {
    this.companiesService.getVacancies(id).subscribe((data) => {
      this.vacancies = data;
    });
  }

  show(id: number) {
    this.target = id;
    this.getVacancies(id);
  }

  hide() {
    this.target = -1;
  }
}
