import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../_services/project.service';
import { Project } from '../_models/Project';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    NgFor,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project

  constructor(private titleService: Title, private projectService: ProjectService) {
    this.titleService.setTitle("Vocaltech - Home")
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.findProjectById(5)
  }
}
