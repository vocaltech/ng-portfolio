import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { SafeHtmlPipe } from '../_pipes/safehtml.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgFor,
    SafeHtmlPipe
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  // BsModalService must be declared in app.config.ts
  constructor(private modalService: BsModalService) {}

  openProjectModal = () => {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    }

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions)
  }
}
