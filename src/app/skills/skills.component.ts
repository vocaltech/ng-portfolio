import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TabsModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
