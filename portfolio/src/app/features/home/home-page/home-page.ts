import { Component } from '@angular/core';
import { ContactForm } from '../contact-form/contact-form';
import { Hero } from '../hero/hero';
import { ProjectsPreview } from '../projects-preview/projects-preview';
import { SkillsPreview } from '../skills-preview/skills-preview';


@Component({
  selector: 'app-home-page',
  imports: [ContactForm, Hero, ProjectsPreview, SkillsPreview],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
