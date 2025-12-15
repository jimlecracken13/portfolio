import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,
    MatDialogModule
 } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-projet-detail-modal',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './projet-detail-modal.html',
  styleUrl: './projet-detail-modal.css',
})
export class ProjetDetailModal {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


}
