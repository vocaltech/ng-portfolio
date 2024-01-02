import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    CarouselModule,
    NgFor
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project = {} as Project

  constructor(public bsModalRef: BsModalRef) {}

}
