import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projet-card',
  imports: [],
  templateUrl: './projet-card.html',
  styleUrl: './projet-card.css',
})
export class ProjetCard {

  //image doit être reçu en Input
  @Input() image!: string
  //image des technologies utilisées doit etre reçu en input
  @Input() nom!: string
  //description doit être reçu en input
  @Input() description!: string

  //liste des images des technologies utilisées
  @Input() technologies!: string[]
  

  // bouton pour afficher le modal popup du projet
  voirplus = 'Voir plus'

}
