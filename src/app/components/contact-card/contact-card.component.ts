import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../modules/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {


  @Input() selectContact: Contact = {} as Contact;


  constructor() { }

  ngOnInit(): void {
  }

  public isNotEmpty(){
    return Object.keys(this.selectContact).length > 0
  }
}
