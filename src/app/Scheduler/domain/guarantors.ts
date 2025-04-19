export interface GuarantorResponse {
  guarantors: Guarantor[];
  familiesCount: string;
}

export interface Guarantor {
  guarantorShortName: string;
  guarantorRUC: null | string;
  guarantorOrder: null | string;
  guarantorNameFlow: null;
  guarantorName: string;
  guarantorIsVisible: null | string;
  guarantorId: null | string;
  guarantorCode: string;
  guarantorAdress: null | string;
}
