import { Component, OnInit } from '@angular/core';
import { asyncScheduler, AsyncSubject, BehaviorSubject, bindCallback, combineLatest, concat, defer, empty, forkJoin, from, fromEvent, generate, iif, interval, mapTo, merge, Observable, observeOn, of, partition, race, range, ReplaySubject, Subject, throwError, timer, zip } from 'rxjs';
import { ajax } from "rxjs/ajax"
import * as $ from "jquery";

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularWithRxJS';

  ngOnInit(): void {
    // // observable 
    // const observable = new Observable<number>(data => { // eğer Observable'a tür belirlersek yalnızca o türde bir data gönderebiliriz.
    //   data.next(1); // next fonksiyonu ile akışa bir data ekleyebiliriz
    //   data.next(5);
    //   data.next(15);

    //   data.complete();
    // });

    // const observer = function (data: any) {
    //   console.log(data);
    // }

    // observable.subscribe(observer);

    // // Subject ->  nereden subscribe olduysan oradan itibaren data gelir.
    // const subject = new Subject();
    // subject.subscribe(data => { console.log(`ObserverA ${data}`); });
    // subject.subscribe(data => { console.log(`ObserverB ${data}`); });
    // subject.next(3);
    // subject.next(8);
    // subject.subscribe(data => { console.log(`ObserverC ${data}`); });
    // subject.next("hello");

    // // BehaviorSubject ->  subscribe olduktan sonra akıştaki bir önceki data'ya alarak devam ediyor.
    // const subject = new BehaviorSubject(1);
    // subject.subscribe(data => { console.log(`ObserverA ${data}`); });
    // subject.subscribe(data => { console.log(`ObserverB ${data}`); });
    // subject.next(3);
    // subject.next(8);
    // subject.subscribe(data => { console.log(`ObserverC ${data}`); });
    // subject.next(9);

    // // ReplaySubject ->  subscribe olduktan sonra akıştaki n önceki data'ya kadar alarak devam edebiliyor.
    // const subject = new ReplaySubject(2);
    // subject.subscribe(data => { console.log(`ObserverA ${data}`); });
    // subject.subscribe(data => { console.log(`ObserverB ${data}`); });
    // subject.next(3);
    // subject.next(8);
    // subject.subscribe(data => { console.log(`ObserverC ${data}`); });
    // subject.next(9);

    // // AsyncSubject ->  subscribe olduktan sonra akıştaki son data'ya getirir.complete() metodunu bekler.
    // const subject = new AsyncSubject();
    // subject.subscribe(data => { console.log(`ObserverA ${data}`); });
    // subject.subscribe(data => { console.log(`ObserverB ${data}`); });
    // subject.next(3);
    // subject.next(8);
    // subject.subscribe(data => { console.log(`ObserverC ${data}`); });
    // subject.next(9);
    // subject.complete();

    // // Scheduler  -> 
    // console.log("Scheduler kullanılmayan ******");
    // const observable = new Observable(data => {
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    //   data.complete();
    // });

    // observable.subscribe(data => console.log(data));
    // console.log("Scheduler kullanılmayan ******");
    // console.log("**********************");

    // console.log("Scheduler kullanılan ******");
    // const observable2 = new Observable(data => {
    //   data.next(1);
    //   data.next(2);
    //   data.next(3);
    //   data.complete();
    // }).pipe(observeOn(asyncScheduler));

    // observable2.subscribe(data => console.log(data));
    // console.log("Scheduler kullanılan ******");
    // console.log("**********************");

    //---------Operators
    // ajax  -> 
    // ajax.getJSON("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
    //   console.log(data);
    // })
    // ajax("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
    //   console.log(data);
    // })

    // // bindCallback  -> 
    // const obs: (url: string) => Observable<readonly unknown[]> = bindCallback($.getJSON);

    // obs("https://jsonplaceholder.typicode.com/posts").subscribe(data => console.log(data));

    // // defer ->  akışa ilk subscribe geldikten sonra başlar.
    // const obs1 = of(new Date());

    // const obs2 = defer(() => of(new Date()));

    // timer(5000).subscribe(() => {
    //   obs1.subscribe(this.writeConsole);
    //   obs2.subscribe(this.writeConsole);
    // })

    // // empty -> adı üstünde boş bir observable nesnesi oluşturuyor. Data akışı olmadığından ekranda kayıt gözükmüyor
    // const result = empty();
    // result.subscribe(this.writeConsole)

    // from -> herhangi bir diziyi alıp geriye Observable döndüren bir operatördür.
    // const numbers = [5, 10, 15];
    // const obs = from(numbers);
    // obs.subscribe(this.writeConsole);
    // obs.subscribe(this.writeConsole);
    // obs

    // // map -> key value ile çalışan dictionary yapılanma sağlıyor.
    // const arabalar = new Map<string, number>();
    // arabalar.set("vw", 1);
    // arabalar.set("opel", 2);
    // const obs = from(arabalar);
    // obs.subscribe(this.writeConsole);

    // // fromEvent -> Herhangi bir nesnenin belirtilen event'ini yakalayarak Observable nesnesi olarak sunan operatördür.
    // // örnek-1
    // const button = document.getElementsByTagName("button")[0];
    // button.addEventListener("click", () => {
    //   console.log("tıklandı");
    // });
    // // örnek-2
    // const obs = fromEvent(button, "click");
    // obs.subscribe(this.writeConsole);

    // // generate -> Verilen şarta göre döngü oluşturarak Observable döndüren bir operatördür.
    // const obs = generate(1, x => x < 3, x => x + 1);
    // obs.subscribe(this.writeConsole);

    // // interval -> Belirtilen sayısal değere karşılık gelen zaman periyot oluşturan bir operatördür.
    // const obs = interval(2000);
    // obs.subscribe(data => {
    //   console.log("hello", data); // data kaçıncı periyotta olduğumuzun index'sini döner.
    // });

    // // of -> Verilen herhangi bir türden değerleri Observable nesnesine dönüştürür.
    // const obs = of(1, 3, 5, "Mehmet", [true, false]);
    // obs.subscribe(this.writeConsole);

    // // range -> Belirtilen bir aralıkta dizisel değer yayan Observable nesnesi döndürür.
    // const obs = range(20, 50);
    // obs.subscribe(this.writeConsole);

    // // throwError -> Hiçbir öğe barındırmayan ve bir hata fırlatan Observable oluşturur.
    // const obs = throwError(new Error("Örnek bir hata"));
    // obs.subscribe(this.writeConsole);

    // // timer -> Milisaniye cinsinden belirtilen süre kadar sonra akışı yayacak olan Observable nesnesi döndürür.
    // const obs = timer(3000,1000);
    // obs.subscribe(data => {
    //   this.writeConsole("merhaba");
    // });

    // // iff -> İki Observable arasında şarta bağlı seçim yapar.
    // let state = true;
    // const obs = iif(() => state, of("true :)", "abc"), of("false :(", "dfg"));
    // obs.subscribe(this.writeConsole);
    // state = false;
    // obs.subscribe(this.writeConsole);

    // // combineLatest -> Verilen tüm Observable'ların akıştaki en sonuncu değerlerini yakalayarak bir kombinasyon yaratan operatördür.
    // const obs1 = of("a", "b", "c");
    // const obs2 = of(1, 2, 3);
    // const obs3 = of(5, 10, 15);
    // const obs1 = timer(1000, 1000);
    // const obs2 = timer(1000, 1000);
    // const obs3 = timer(3000, 3000);

    // combineLatest(obs1, obs2, obs3).subscribe(this.writeConsole);

    // // concat -> Verilen tüm Observable'ları sırasıyla yayan Observable oluşturur.
    // const obs1 = of("a", "b", "c");
    // const obs2 = of(1, 2, 3);

    // concat(obs1, obs2).subscribe(this.writeConsole);

    // // forkJoin -> Observable'ların tamamlanmasını bekler ve sonra yayınlanan sonuncu değerlerin elde edilmesini sağlar.
    // const obs1 = of("a", "b", "c");
    // const obs2 = of(1, 2, 3);
    // const obs3 = of(5, 10, 15);

    // forkJoin(obs1, obs2, obs3).subscribe(this.writeConsole);

    // // forkJoin -> Observable'ları birleştirerek tek bir Observable oluşturur. Concatten farkı bütün olarak değil akıştaki sırasıyla ekleniyor.
    // const obs1 = of("a", "b", "c");
    // const obs2 = of(1, 2, 3);
    // const obs3 = of(5, 10, 15);

    // merge(obs1, obs2, obs3).subscribe(this.writeConsole);

    // // partition -> Observable'ı belirli şarta göre, şartı karşılayanlar ve karşılamayanlar olmak üzere ikiye böler.
    // const obs1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // const [obs2, obs3] = partition(obs1, x => x % 3 == 0);
    // this.writeConsole("şarta uyanlar");
    // obs2.subscribe(this.writeConsole);
    // this.writeConsole("şarta uymayanlar");
    // obs3.subscribe(this.writeConsole);

    // // race -> İlk yayına başlayan Observable'a abone olur.
    // const obs1 = interval(1000).pipe(mapTo("hello"));
    // const obs2 = interval(3000).pipe(mapTo("Mehmet"));
    // const obs3 = interval(500).pipe(mapTo("World"));

    // race(obs1, obs2, obs3).subscribe(this.writeConsole);

    // // zip -> Birden fazla Observable yayınındaki aynı periyottaki dataları dizi olarak döndüren operatördür. (Not: Observable'lar birbirlerini aynı sıradaki data için bekliyor.)
    // const obs1 = of(1, 2, 3);
    // const obs2 = of(4, 5, 6);
    // const obs3 = of(7, 8, 9);
    // const obs1 = timer(1000, 1000);
    // const obs2 = timer(2000, 2000);
    // const obs3 = timer(3000, 3000);

    // zip(obs1, obs2, obs3).subscribe(this.writeConsole);

    // pipe -> Kod içerisinde yaygın olarak kullanılan birden fazla operatör dizisi varsa eğer pipe fonksiyonu kullanılabilir
    const obs = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    


  }

  writeConsole(data: any) {
    console.log(data);
  }
}
