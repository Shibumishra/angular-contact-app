import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contact } from '../../modules/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public getAllContact(): Observable<Contact[]> {
    let dataURL: string = '';
    return this.httpClient.get<Contact[]>(dataURL)
      .pipe(
        catchError(this.handleError)
      );
  }



  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred:' ${error.error}`;
      //  console.error('An error occurred:', error.error)
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
      errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    errorMessage += '\n Something bad happened; please try again later.';
    return throwError(() => new Error(errorMessage));
  }
}
