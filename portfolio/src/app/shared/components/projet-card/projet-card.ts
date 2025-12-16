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
  @Input() projet!: Projet

  // bouton pour afficher le modal popup du projet
  voirplus = 'Voir plus'

  //bouton d'affichage du modal avec les détails
  showDetails(){
    this.dialog.open(ProjetDetailModal, {data:{
      projet: this.projet
    }})
    console.log("les données du projet", this.projet)
  }

}
