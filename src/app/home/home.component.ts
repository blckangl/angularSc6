import {Component, OnInit, ViewChild} from '@angular/core';
import {observable, Observable, Subject} from 'rxjs';
import {error} from '@angular/compiler/src/util';
import {filter, map} from 'rxjs/operators';
import {Form, NgModel} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('form') form: Form;
  customObservable: Observable<any>;
  numberSubject = new Subject<number>();
  numberInput = 5;
  currentNumber = 5;

  constructor() {
  }

  ngOnInit(): void {
    this.customObservable = Observable.create((observable) => {
      let count = 0;

      setInterval(() => {
        observable.next(count);
        count++;

        if (count > 10) {
          observable.complete();
        }
        if (count > 11) {
          observable.error(new Error('Count is greater than 5'));
        }
      }, 1000);
    });

    // this.customObservable.pipe(filter((data) => {
    //   return data % 2 === 0;
    // })).subscribe((couter) => {
    //   console.log('custom count:', couter);
    // }, (error) => {
    //   console.log(error);
    // }, () => {
    //   console.log('completed ');
    // });
    // ;

    this.numberSubject.subscribe((data) => {
      this.currentNumber = data;
    });


  }


  updateCurrentNumber() {
    this.numberSubject.next(this.numberInput);
  }

  onSubmit() {
    console.log(this.form);
  }
}
