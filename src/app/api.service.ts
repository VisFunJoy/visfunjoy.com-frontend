import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { ContactForm } from './api-models';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = environment.apiServerUrl;

  constructor(private httpClient: HttpClient) {}

  addContact(contactFormValues: ContactForm): Observable<ContactForm>{
    return this.httpClient.post<ContactForm>(`${this.PHP_API_SERVER}/createContactMessage.php`, JSON.stringify(contactFormValues));
  }
}
