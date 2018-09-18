import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { AppRoutingModule } from './/app-routing.module';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';

import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule }    from '@angular/common/http';
import { VaccinationStatusComponent } from './vaccination-status/vaccination-status.component';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    MedicalHistoryComponent,
    MedicalRecordComponent,
    VaccinationStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
