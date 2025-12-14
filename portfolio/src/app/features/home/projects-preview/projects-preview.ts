import { Component } from '@angular/core';
import { ProjetCard } from '../../../shared/components/projet-card/projet-card';

@Component({
  selector: 'app-projects-preview',
  imports: [ProjetCard],
  templateUrl: './projects-preview.html',
  styleUrl: './projects-preview.css',
})
export class ProjectsPreview {

  projets: ProjetCard[] = [
    { image: 'assets/images/projets/projet1.png', nom: 'Projet 1', description: 'Description du projet 1'
      , technologies: ['HTML', 'CSS', 'JavaScript'], voirplus: 'Voir plus' },
      { image: 'assets/images/projets/projet2.png', nom: 'Projet 2', description: 'Description du projet 2'
        , technologies: ['HTML', 'CSS', 'JavaScript'], voirplus: 'Voir plus' },
        {image: 'assets/images/projets/projet3.png', nom: 'Projet 3', description: 'Description du projet 3'
          , technologies: ['HTML', 'CSS', 'JavaScript'], voirplus: 'Voir plus' }
  ]

}
