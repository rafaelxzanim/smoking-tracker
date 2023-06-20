import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smoking-tracker';
  ngOnInit():void{
    console.log('Start App 🚀');
  }
}
