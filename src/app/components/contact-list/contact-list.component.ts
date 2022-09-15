import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContactService } from '../../services/Contact/contact.service';
import { Contact } from '../../modules/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts: Contact[] = [] as Contact[];
  public errorMessage: String | undefined;

  @Output() sendContact = new EventEmitter();


  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContact().subscribe((data) => {
      this.contacts = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }

  public selectContact(contact: Contact) {
    this.sendContact.emit(contact);
  }

}
