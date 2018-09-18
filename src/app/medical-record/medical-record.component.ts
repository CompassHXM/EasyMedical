import { Component, OnInit, Input } from '@angular/core';
import { MedicalRecordModel } from '../medical-record-model';
import { MedicineModel } from '../medicine-model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MedicalRecordService }  from '../medical-record.service';
import { MedicineService } from '../medicine.service';
@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {
  @Input() medicalRecords: MedicalRecordModel[] = [];
  medicines: MedicineModel[] = [];
  @Input() id: number = 0;
  constructor(
    private route: ActivatedRoute,
    private mrService: MedicalRecordService,
    private mService: MedicineService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMedicalRecords();
    this.getMedicines();
    this.id = +this.route.snapshot.paramMap.get('id');
  }
  add(title: string, description: string, location: string): void {
    title = title.trim();
    description = description.trim();
    location = location.trim();
    if (!name || !description) { return; }
    this.mrService.addMedicalRecord({ title,description,location } as MedicalRecordModel)
      .subscribe(medicalRecord => {
        this.medicalRecords.push(medicalRecord);
      });
    this.id = this.medicalRecords.length - 1;
  }
  getMedicalRecords(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.mrService.getMedicalRecords()
      .subscribe(medicalRecords => this.medicalRecords = medicalRecords);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.mrService.updateMedicalRecord(this.medicalRecords[this.id])
      .subscribe(() => this.goBack());
  }
  getMedicines(): void {
    this.mService.getMedicines()
      .subscribe(medicines => this.medicines = medicines);
  }
}
