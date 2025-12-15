import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProjetDetailModal } from '../projet-detail-modal/projet-detail-modal';
import { Projet } from '../../models/projet';
@Component({
  selector: 'app-projet-card',
  imports: [],
  templateUrl: './projet-card.html',
  styleUrl: './projet-card.css',
})
export class ProjetCard {

  constructor(private dialog: MatDialog) { }

  //remplacer par le modèle personne
  //@Input() projet!: Projet

  //image doit être reçu en Input
  @Input() image!: string
  //image des technologies utilisées doit etre reçu en input
  @Input() nom!: string
  //description doit être reçu en input
  @Input() description!: string

  //liste des images des technologies utilisées
  @Input() technologies!: string[]

  //role dans le projet
  @Input() role!: string

  //fonctionnalité du projet
  @Input() fonctionnalite!: string

  //challenge technique
  @Input() defi!: string

  //lien github du projet
  @Input() lien!: string

  // bouton pour afficher le modal popup du projet
  voirplus = 'Voir plus'

  //bouton d'affichage du modal avec les détails
  showDetails(){
    this.dialog.open(ProjetDetailModal, {data:{
      image: this.image,
      nom: this.nom,
      role: this.role,
      defi: this.defi,
      fonctionnalite: this.fonctionnalite,
      lien_github: this.lien
    }})
    console.log("les données du projet", this.image, this.nom, this.role, this.defi, this.fonctionnalite, this.lien)
  }

}
