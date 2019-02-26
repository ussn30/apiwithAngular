import { Component ,OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  greetings = '';
  constructor(private _appService: AppService)
  {

  }
  title = 'hello-world';
  
    ngOnInit(): void {
      this._appService.sayHello()
        .subscribe(
        result => {
          this.greetings = result;
        }
        );
    }

  getHello()
  {
    this._appService.sayHello().subscribe(next => {
      console.log(next.text());
      this.greetings = JSON.parse(next.text());
      }, error => {
        console.log(error);
      });
      } 

   
  }
