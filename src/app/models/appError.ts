export class AppError {
  show: boolean;
  message: string;

  constructor(show: boolean, message: string) {
    this.show = show;
    this.message = message;
  }
  
}
