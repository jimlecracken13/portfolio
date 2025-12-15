import { Component } from '@angular/core';
import { SkillCard } from '../../../shared/components/skill-card/skill-card';



@Component({
  selector: 'app-skills-preview',
  imports: [SkillCard],
  templateUrl: './skills-preview.html',
  styleUrl: './skills-preview.css',
})
export class SkillsPreview {

  constructor() { }

  //liste des skills
  skills: SkillCard[] = [
    { titre: 'HTML', niveau: 'Avancé', technologies: ['/assets/images/technologies/html.png'], valeur: 90 },
    { titre: 'CSS', niveau: 'Avancé', technologies: ['/assets/images/technologies/css.png'], valeur: 80 },
    { titre: 'JavaScript', niveau: 'Intermédiaire', technologies: ['/assets/images/technologies/javascript.png'], valeur: 70 },
    { titre: 'Angular', niveau: 'Intermédiaire', technologies: ['/assets/images/technologies/angular.png'], valeur: 60 },
  ];

}
