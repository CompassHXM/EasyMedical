import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalHistoryComponent } from'./medical-history/medical-history.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import { VaccinationStatusComponent } from './vaccination-status/vaccination-status.component';

const routes: Routes = [
  { path: '', redirectTo: '/medical-history', pathMatch: 'full' },
  { path: 'medical-history', component: MedicalHistoryComponent },
  { path: 'medical-record', component: MedicalRecordComponent },
  { path: 'medical-record/:id', component: MedicalRecordComponent },
  { path: 'vaccination-status', component: VaccinationStatusComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}