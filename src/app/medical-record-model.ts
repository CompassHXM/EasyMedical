import { MedicineModel } from './medicine-model';
export class MedicalRecordModel {
    id: number;
    time : Date;
    title : string;
    description: string;
    medicine: MedicineModel;
    location: string;
}