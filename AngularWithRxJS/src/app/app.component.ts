import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { asyncScheduler, AsyncSubject, audit, auditTime, BehaviorSubject, bindCallback, combineLatest, concat, debounce, debounceTime, defer, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, empty, filter, first, forkJoin, from, fromEvent, generate, ignoreElements, iif, interval, last, map, mapTo, merge, Observable, observeOn, of, partition, race, range, ReplaySubject, sample, sampleTime, single, Subject, throwError, timer, zip } from 'rxjs';
import { ajax } from "rxjs/ajax"
import * as $ from "jquery";

declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void { // component ağaya kalktıktan sonra tetiklenen metottur.
    // //debounce
    // const obs = fromEvent(this.txt.nativeElement, "keyup");
    // obs.pipe(debounce(x => interval(100))).subscribe(this.writeConsole);


    // //debounceTime -> debounce operatörünün parametreli halidir.
    // const obs = fromEvent(this.txt.nativeElement, "keyup");
    // obs.pipe(debounceTime(100)).subscribe(this.writeConsole);
  }
  title = 'AngularWithRxJS';

  @ViewChild("txt")
  txt!: ElementRef;

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

    // // pipe -> Kod içerisinde yaygın olarak kullanılan birden fazla operatör dizisi varsa eğer pipe fonksiyonu kullanılabilir
    // const obs = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    // obs.pipe(filter(x => x % 3 == 0), map(x => x + " değeri")).subscribe(this.writeConsole);

    // // audit -> bir süre için Observable akışındaki değerler üzerinde işlem yapmamıza izin verir ve ardından en sonuncu(yeni) değerleri yayınlar.
    // const obs1 = interval(1000);
    // const obs2 = obs1.pipe(audit(x => interval(2000)), map(x => x + ' değeri'));

    // obs2.subscribe(this.writeConsole);

    // // auditTime -> audit operatörünün parametreli halidir.
    // const obs1 = interval(1000);
    // const obs2 = obs1.pipe(auditTime(2000), map(x => x + ' değeri'));

    // obs2.subscribe(this.writeConsole);

    // debounce -> akıştaki değerlerin zama aşımı süresini belirleyebilmek için kullanılan bir operatördür.
    // const obs = fromEvent(document.getElementsByTagName("button"), "click");
    // obs.pipe(debounce(x => interval(250))).subscribe(data => {
    //   this.writeConsole("Tıklandı...");
    // });
    // Devamı ngAfterViewInit'te

    // // distinct -> Akıştaki verilerden tekrar edenleri tekil olarak döndüren operatördür.
    // const obs = of(1, 2, 3, 4, 4, 4, 5, 5, 5, 2);
    // obs.pipe(distinct(x => x)).subscribe(this.writeConsole); // distinct in içini doldurmadan da çalışabilir fakat obje olmadığına dikkat et

    // distinctUntilChanged -> Akıştaki verileri değişiklik olana kadar tekilleştiren operatördür.
    // örnek  1,1,2,2,2,1,1,2,2,3,3,4
    //        1,2,1,2,3,4
    // const obs = of(1, 1, 2, 2, 2, 1, 1, 2, 2, 3, 3, 4);

    // obs.pipe(distinctUntilChanged()).subscribe(this.writeConsole);

    // distinctUntilKeyChanged -> Akıştaki objelerden verilen key'e(anahtar değere göre) değişiklik olana kadar tekilleştiren operatördür.
    // const obs = of(
    //   { name: "ali", age: 22 },
    //   { name: "ahmet", age: 22 },
    //   { name: "ali", age: 23 },
    //   { name: "ali", age: 24 },
    //   { name: "ahmet", age: 22 },
    //   { name: "ali", age: 22 });

    // obs.pipe(distinctUntilKeyChanged("name")).subscribe(this.writeConsole);
    // obs.pipe(distinctUntilChanged((q, p) => q.name == p.name)).subscribe(this.writeConsole); // üstteki ve alttaki aynı işlevi görmektedir.

    // // elementAt -> Akıştaki verilerden index numarası verileni döndüren operatördür.
    // const obs = of(1, 2, 3, 4);
    // obs.pipe(elementAt(2)).subscribe(this.writeConsole);

    // // filter -> Observable'da ki verileri belirli bir koşula göre yayan operatördür. Filtreleme işlemi gerçekleştirir.
    // const obs = of(1, 2, 3, 4, 5, 6);
    // obs.pipe(filter(x => x > 3)).subscribe(this.writeConsole);

    // // first -> Observable'da ki ilk değeri döner.
    // const obs = of(1, 2, 3, 4, 5, 6);
    // obs.pipe(first()).subscribe(this.writeConsole);

    // // ignoreElements -> Observable tarafından yayılan tüm ögelerini yok sayar, görmezden gelir. Yalnızca complete ve error çıktılarını yakalar.
    // const obs = of(1, 2, 3, 4, 5, 6);
    // obs.pipe(ignoreElements())
    // .subscribe(this.writeConsole,
    //   error => {
    //     this.writeConsole(error)
    //   },
    //   () => {
    //     this.writeConsole("The end")
    //   });
    // .subscribe({
    //   error: error => this.writeConsole(error),
    //   complete: () => this.writeConsole("akış tamamlandı.")
    // })

    // // last -> Observable'da ki son değeri döner.
    // const obs = of(1, 2, 3, 4, 5, 6);
    // obs.pipe(last()).subscribe(this.writeConsole);

    // // sample -> Periyodik zaman aralıkları içinde bir Observable tarafından yayılan en son ögeyi yayınlar.
    // const second = interval(1000);
    // const obs = fromEvent(document, "click");
    // second.pipe(sample(obs)).subscribe(this.writeConsole);

    // // sampleTime -> Periyodik zaman aralıkları içinde bir Observable tarafından yayılan en son ögeyi yayınlar.
    // const obs = fromEvent(document, "click");
    // obs.pipe(sampleTime(1000)).subscribe(this.writeConsole);

    // // single -> Bildirilen şarta uygun birden fazla değer varsa hata verir yoksa undefined dönecektir. Verile şarta uygun sadece tek bir değer döndürmelidir.
    // const obs = of(1, 1, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6);
    // const obs = range(1, 10);
    // obs.pipe(single(x => x > 5)).subscribe({
    //   next: this.writeConsole,
    //   error: this.writeConsole
    // });

  }

  writeConsole(data: any) {
    console.log(data);
  }
}
