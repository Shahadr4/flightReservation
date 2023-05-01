import { AppRoutingModule } from './app-routing.module';
import { DisplayFlightComponent } from './component/display-flight/display-flight.component';
import { FindFlightComponent } from './component/find-flight/find-flight.component';
import {NgModule} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { PassengerDtailsComponent } from './component/passenger-dtails/passenger-dtails.component';
import { ConfirmComponent } from './component/confirm/confirm.component';


const routes:Routes =[

    {
        path:'',redirectTo:'',pathMatch:'full'
    },
    {
        path:'findFlights',

        component:FindFlightComponent
    },
    {
        path:'displayFlight',

        component:DisplayFlightComponent
    },
    {
        path:'passengerDetails/:id',

        component:PassengerDtailsComponent
    },
    {
        path:'confirm/:id',

        component:ConfirmComponent
    }


];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouterModule{

}
