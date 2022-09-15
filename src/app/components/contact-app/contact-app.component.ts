import { Component, OnInit } from '@angular/core';
import { Contact } from '../../modules/contact';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrls: ['./contact-app.component.css']
})
export class ContactAppComponent implements OnInit {

  public selectContact:Contact = {} as Contact;
  
  constructor() { }

  ngOnInit(): void {
  }

}
