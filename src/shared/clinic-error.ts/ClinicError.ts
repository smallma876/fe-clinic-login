interface ClinicErrorProps {
  code: string;
  title: string;
  message: string;
  statusCode?: number;
}

class ClinicError extends Error {
  public readonly code: string;
  public readonly title: string;
  public readonly statusCode: number;

  constructor({ code, title, message, statusCode = 500 }: ClinicErrorProps) {
    super(message);
    this.title = title;
    this.code = code;
    this.statusCode = statusCode;
  }
}

export default ClinicError;
