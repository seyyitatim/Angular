import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'  // root sayesinde bu service global olarak tanımlanıyor. Burayı kaldırıp
                      // app.module içindeki providers alanına ekleyerek de global olarak tanımlayabiliriz.
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    alertify.success(message);
  }

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }
}
