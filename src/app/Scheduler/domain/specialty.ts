export interface Specialty {
  isPrincipal: string;
  specialtyName: string;
  specialtyCode: string;
  isPediatric: string;
}

export interface SpecialtyResponse {
  specialties: Specialty[];
}
