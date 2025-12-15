import { Component, Input } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-skill-card',
  imports: [MatProgressBarModule],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {

  @Input() titre!: string;
  @Input() niveau!: string;
  //liste des images des compétences
  @Input() technologies!: string[]

  //niveau de compétences
  @Input() valeur!: number;
}
