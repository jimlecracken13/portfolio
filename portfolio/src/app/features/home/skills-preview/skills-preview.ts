import { Component } from '@angular/core';
import { SkillCard } from '../../../shared/components/skill-card/skill-card';

@Component({
  selector: 'app-skills-preview',
  imports: [SkillCard],
  templateUrl: './skills-preview.html',
  styleUrl: './skills-preview.css',
})
export class SkillsPreview {

  //liste des skills
  skills: SkillCard[] = [
    { titre: 'HTML', niveau: 'Avancé', icone: ['html'], valeur: 90 },
    { titre: 'CSS', niveau: 'Avancé', icone: ['css'], valeur: 80 },
    { titre: 'JavaScript', niveau: 'Intermédiaire', icone: ['javascript'], valeur: 70 },
    { titre: 'Angular', niveau: 'Intermédiaire', icone: ['angular'], valeur: 60 },
  ];

}
