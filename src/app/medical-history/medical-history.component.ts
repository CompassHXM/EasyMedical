import { Component, OnInit } from '@angular/core';
import { MedicalRecordModel } from '../medical-record-model'
import { MedicalRecordService } from '../medical-record.service'
@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css']
})
export class MedicalHistoryComponent implements OnInit {

  records: MedicalRecordModel[] = [];

  constructor(private mrService: MedicalRecordService) { }

  ngOnInit() {
    this.getRecords();
  }
  getRecords(): void {
    this.mrService.getMedicalRecords()
      .subscribe(records => this.records = records.slice(0, 3));
  }
}
