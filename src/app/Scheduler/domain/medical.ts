export interface MedicalListResponse {
  medicalList: Medical[];
}

export interface Medical {
  photoUrl: string;
  localwork: Localwork[];
  experienceArea: string;
  specialityMedical: string;
  medicalName: string;
  isFavorite: string;
  isOutstanding: string;
  hisCode: string;
  specialityCode: string;
  isPediatric: string;
  cmp: string;
}

export interface Localwork {
  visitType: VisitType;
  localWorkName: LocalWorkName;
  startDate: string;
  endDate: string;
  localWorkCode: string;
}

export enum LocalWorkName {
  MdcSANIsidroPresencial = 'Mdc San Isidro_Presencial',
  SedeLaMolinaPresencial = 'Sede La Molina Presencial',
  SedeLimaPresencial = 'Sede Lima_Presencial',
  SedeSANBorjaPresencial = 'Sede San Borja_Presencial',
  SedeSANBorjaVirtual = 'Sede San Borja_Virtual',
  SedeSurcoPresencial = 'Sede Surco_Presencial',
}

export enum VisitType {
  CM = 'CM',
  Cv = 'CV',
}
