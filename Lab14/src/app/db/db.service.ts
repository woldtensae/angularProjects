import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  constructor() { }
  getData(){
    return [
      {"id":"1", "name": "Aman Estifanos", "stuId":"12345", "email":"aman@gmail.com"},
      {"id":"2", "name": "Ameha Amsalu", "stuId":"67859", "email":"ameha@gmail.com"},
      {"id":"3", "name": "Philmon ", "stuId":"25689", "email":"philmon@gmail.com"},
      {"id":"4", "name": "Meron Tolossa", "stuId":"52366", "email":"meron@gmail.com"}
    ]
  }
}
