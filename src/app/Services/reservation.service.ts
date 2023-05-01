import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  
  flightUrl:string="http://localhost:8080/flightservices/flight";
  reservationUrl:string="http://localhost:8080/flightservices/reservations";
  flightData:any;

  constructor(private _http:HttpClient) { }

  public getFlights(from:string,to:string,departureDate:string ) {
    return this._http.get(`${this.flightUrl}?from=${from}&to=${to}&departureDate=${departureDate}`)
      .pipe(
        map(res => {
          this.flightData = res;
        })
      );
  }


  public getFlight(id: number) {
    return this._http.get(`${this.flightUrl}/${id}`)
      .pipe(
        map(res => {
          return res;
        })
      );
  }


  public  saveReservation(reservation: any):any{
    return this._http.post(this.reservationUrl,reservation).pipe(
      map(res=>{
        return res;
      },
      catchError(err => {
        console.error(err);
        return throwError(err);
      })
      
      )
    )

  }
}
