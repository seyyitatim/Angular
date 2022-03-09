import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularWithRxJS';

  ngOnInit(): void {
    const observable = new Observable<number>(data => { // eğer Observable'a tür belirlersek yanlızca o türde bir data gönderebiliriz.
      data.next(1); // next fonksiyonu ile akışa bir data ekleyebiliriz
      data.next(5);
      data.next(15);

      data.complete();
    });

    const observer = function (data: any) {
      console.log(data);
    }

    observable.subscribe(observer);
    
  }
}
