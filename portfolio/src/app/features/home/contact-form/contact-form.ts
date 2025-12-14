import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

  //email
  email= 'jimlecracken13@gmail.com'

  //linkedin
  linkedin = ''

  //github
  github = 'https://github.com/jimlecracken13'

  //button titre
  telecharger = 'Techarger mon cv'

  //button envoyer
  envoyer = 'Envoyer'


}
