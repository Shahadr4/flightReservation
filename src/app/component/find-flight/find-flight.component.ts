import { Router } from '@angular/router';
import { ReservationService } from './../../Services/reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit {
  from: string ='';
  to: string='';
  departuredate: string='';

  constructor(private service: ReservationService,private router:Router) { 
    
  }

  ngOnInit() {

  }

  public onSubmit(data: any) {
    this.service.getFlights(data.from,data.to,data.departureDate).subscribe(
      res =>{
        this.router.navigate(['/displayFlight'])

      }
    )
  }
}