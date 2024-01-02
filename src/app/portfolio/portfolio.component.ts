import { NgFor,NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { ProjectService } from '../_services/project.service';
import { Tag } from '../_models/Tag';

import { Router } from '@angular/router'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    NgFor, NgIf,
    CollapseModule, FormsModule,
    ProjectCardComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];
  isCollapsed: boolean = true
  filterTags = [] as Tag[]

  constructor(private titleService: Title, private projectService: ProjectService, private router: Router) {
    this.titleService.setTitle("Vocaltech - Portfolio")
  }

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects()
  }
  
  filter = (event: any) => {
    const curTarget = event.currentTarget as HTMLInputElement
    const chkBoxValue = curTarget.value
    const isChkBoxChecked = curTarget.checked

    const currentTag = Tag.getTagByKey(chkBoxValue)

    if (isChkBoxChecked === true) {
      this.filterTags.push(currentTag);
    } else {
      const tagIdx = this.filterTags.findIndex(tag => tag === currentTag )
      delete this.filterTags[tagIdx]
      this.filterTags = this.filterTags.filter(tag => tag !== undefined)  // remove 'undefined' items
    }

    const filteredProjects = this.projectService.getProjectsByFilter(this.filterTags)

    if (filteredProjects.length > 0) {
      this.projects = filteredProjects
    } else {
      this.projects = this.projectService.getAllProjects()
    }
  }

  checkedOptions = Tag.getAllTagsKeys().map(tagOption => {
    return {
      name: tagOption,
      selected: false
    }
  })

  hiddenResetLink = (): boolean => {
    if ((! this.isCollapsed) && (this.filterTags.length > 0)) {
      return false
    }
    return true
  }

  onClickResetLink = () => {
    this.filterTags = []

    // refresh current page
    this.reloadCurrentRoute()
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
