import { Component, Renderer2 } from '@angular/core';
import { NgIf } from '@angular/common'
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion'

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    AccordionModule,
    NgIf
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isWorkExperienceAccordionOpened: boolean = true

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle("Vocaltech - Resume")
  }

  downloadPdfResume = () => {
    const downloadLink: HTMLElement = this.renderer.createElement('a')
    downloadLink.setAttribute('target', '_blank')
    downloadLink.setAttribute('href', '/assets/sample_resume.pdf')
    downloadLink.setAttribute('download', 'resume-cv.pdf')
    downloadLink.click()
    downloadLink.remove()
  }
}
