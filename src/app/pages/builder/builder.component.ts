import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../../project.service';
import { Projet } from '../../project';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
})
export class BuilderComponent implements OnInit {
  Url = 'http://localhost:8082/projects';
  projects: Projet[] = [];

  constructor(private projetService: ProjetService, private router: Router) {}

  ngOnInit(): void {
    this.projetService.getProjet().subscribe((data: Projet[]) => {
      this.projects = data;
      console.log(data)
    });
  }


}
