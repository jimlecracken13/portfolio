import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  //image

  //nom 
  nom = 'Diallo'

  //prenom
  prenom = 'Amadou'

  //titre
  titre = "Ingénieur en Génie Logiciel"
  titre2 = "Developpeur web et mobile"

  //description
  description = `Je suis un développeur web et mobile expérimenté,
  spécialisé dans la création de sites web et d'applications mobiles 
  interactifs et performants. Avec une solide formation en génie logiciel et 
  une expérience pratique en développement, 
  je suis capable de concevoir et de mettre en œuvre des solutions 
  technologiques adaptées aux besoins de mes clients. 
  Mon objectif est de créer des expériences utilisateur exceptionnelles et 
  de contribuer au succès de mes projets.`
  //voir projet
  voirProjet = 'Voir mes projets'
  //contact
  contact = 'Me contacter'

}
