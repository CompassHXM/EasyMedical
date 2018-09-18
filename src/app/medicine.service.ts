import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MedicineModel } from './medicine-model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MedicineService {

  private medicineUrl = 'api/medicines';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getMedicines (): Observable<MedicineModel[]> {
    return this.http.get<MedicineModel[]>(this.medicineUrl)
      .pipe(
        tap(xx => this.log('fetched medicine')),
        catchError(this.handleError('getMedicine', []))
      );
  }

  searchMedicines(term: string): Observable<MedicineModel[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<MedicineModel[]>(`${this.medicineUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<MedicineModel[]>('searchMedicines', []))
    );
  }

  //////// Save methods //////////

  addMedicine (medicine: MedicineModel): Observable<MedicineModel> {
    return this.http.post<MedicineModel>(this.medicineUrl, medicine, httpOptions).pipe(
      tap((hero: MedicineModel) => this.log(`added medicine w/ name=${medicine.name}`)),
      catchError(this.handleError<MedicineModel>('addMedicine'))
    );
  }

  deleteMedicine (medicine: MedicineModel | number): Observable<MedicineModel> {
    const id = typeof medicine === 'number' ? medicine : medicine.id;
    const url = `${this.medicineUrl}/${id}`;

    return this.http.delete<MedicineModel>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted medicine id=${id}`)),
      catchError(this.handleError<MedicineModel>('deleteMedicine'))
    );
  }

  updateMedicine (medicine: MedicineModel): Observable<any> {
    return this.http.put(this.medicineUrl, medicine, httpOptions).pipe(
      tap(_ => this.log(`updated medicine id=${medicine.id}`)),
      catchError(this.handleError<any>('updateMedicine'))
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

  private log(message: string) {
    
  }
}