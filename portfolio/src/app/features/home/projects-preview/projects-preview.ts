import { Component } from '@angular/core';
import { ProjetCard } from '../../../shared/components/projet-card/projet-card';
import { Projet } from '../../../shared/models/projet';

@Component({
  selector: 'app-projects-preview',
  imports: [ProjetCard],
  templateUrl: './projects-preview.html',
  styleUrl: './projects-preview.css',
})
export class ProjectsPreview {

  projets: Projet[] = [
   {
    nom: 'Repartir',
    description: 'This is project 1',
    role: 'Developer',
    defi: 'This is the first project',
    fonctionnalite: 'This is the first project',
    image: 'https://via.placeholder.com/300x200',
    lien: 'https://github.com/jimlecracken13',
    technologies: ['assets/images/angular.jpg', 'assets/images/typescript.jpg', 'assets/images/html.jpg', 'assets/images/css.jpg']
  },
  ];

}
