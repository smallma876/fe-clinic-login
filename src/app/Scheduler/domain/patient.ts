export interface Patient {
  shippingReference: string;
  isPortalUser: string;
  documentType: string;
  personMobilePhone: string;
  phone: string;
  guarantors: Guarantor[];
  termsAndConditionFlag: string;
  documentNumber: string;
  names: string;
  favoritesMedicals: string;
  investigations: string;
  clinicHistoryHis6: string;
  clinicHistoryHis5: string;
  age: string;
  promotionsFlag: string;
  shippingDistrict: string;
  gender: string;
  maritalStatus: string;
  clientCodeHis6: string;
  lastName: string;
  lastName2: string;
  email: string;
  domicileStreet: string;
  isCuidate: string;
}

export interface Guarantor {
  ruc: string;
  shortName: string;
  guarantorId: string;
  guarantorCode: string;
}
