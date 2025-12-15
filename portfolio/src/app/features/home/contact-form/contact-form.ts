import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  name: String = ''
  sender_email: String = ''
  message: String = ''

  //email
  email: String = 'jimlecracken13@gmail.com'

  //linkedin
  linkedin: String = ''

  //github
  github: String = 'https://github.com/jimlecracken13'

  //button titre
  telecharger: String = 'Techarger mon cv'

  //button envoyer
  envoyer: String = 'Envoyer'

  //methode pour submit pour soummettre le formulaire
  submitForm() {
    //appelle du service d'envoies d'email
    console.log(this.name, this.sender_email, this.message)
  }


}
