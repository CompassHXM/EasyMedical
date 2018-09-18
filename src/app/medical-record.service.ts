import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MedicalRecordModel } from './medical-record-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MedicalRecordService {

  private medicalRecordUrl = 'api/medicalRecords';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getMedicalRecord(id: number): Observable<MedicalRecordModel> {
    const url = `${this.medicalRecordUrl}/${id}`;
    let records = this.http.get<MedicalRecordModel[]>(this.medicalRecordUrl)
    return records[id];
  }

  /** GET heroes from the server */
  getMedicalRecords (): Observable<MedicalRecordModel[]> {
    return this.http.get<MedicalRecordModel[]>(this.medicalRecordUrl)
      .pipe(
        tap(MedicalRecords => this.log('fetched medical record')),
        catchError(this.handleError('getMedical', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchMedicalRecords(term: string): Observable<MedicalRecordModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<MedicalRecordModel[]>(`${this.medicalRecordUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<MedicalRecordModel[]>('searchMedicalRecords', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addMedicalRecord (medical: MedicalRecordModel): Observable<MedicalRecordModel> {
    return this.http.post<MedicalRecordModel>(this.medicalRecordUrl, medical, httpOptions).pipe(
      tap((hero: MedicalRecordModel) => this.log(`added medical w/ title=${medical.title}`)),
      catchError(this.handleError<MedicalRecordModel>('addMedicalRecord'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteMedicalRecord (medical: MedicalRecordModel | number): Observable<MedicalRecordModel> {
    const id = typeof medical === 'number' ? medical : medical.id;
    const url = `${this.medicalRecordUrl}/${id}`;

    return this.http.delete<MedicalRecordModel>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted medical record id=${id}`)),
      catchError(this.handleError<MedicalRecordModel>('deleteMedicalRecord'))
    );
  }

  /** PUT: update the hero on the server */
  updateMedicalRecord (medical: MedicalRecordModel): Observable<any> {
    return this.http.put(this.medicalRecordUrl, medical, httpOptions).pipe(
      tap(_ => this.log(`updated medical id=${medical.id}`)),
      catchError(this.handleError<any>('updateMedicalRecord'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }
}