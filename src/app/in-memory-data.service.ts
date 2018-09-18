import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const medicines = [
      { id: 0, name: 'Penicillin' },
      { id: 1, name: 'Medicine name' },
      { id: 2, name: 'Aspirin' },
      { id: 3, name: 'Nitroglycerine' },
      { id: 4, name: 'Vitamin B compound' }
    ];
    const medicalRecords = [
      {
        id: 0,
        time : new Date("August 09, 2018 09:46:00"),
        title : 'Headache',
        description: 'The patient feels headache, nausea and vomiting in the past 2 days.',
        medicine: medicines[4],
        location: 'Medical department, Shanghai Fifth Hospital'
      },
      {
        id: 1,
        time : new Date("August 30, 2018 10:13:00"),
        title : 'Fever',
        description: 'The temperature has risen steadily from 37.6℃ to 40℃ orally over the past 3 days.',
        medicine: medicines[0],
        location: 'Heating specialist, Shanghai Sixth Hospital'
      },
      {
        id: 2,
        time : new Date("September 6, 2018 15:11:00"),
        title : 'A disease name',
        description: 'Description of the disease',
        medicine: medicines[2],
        location: 'The location of treatment'
      }
    ];
    return {heroes,medicines,medicalRecords};
  }
}