import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results : string[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get('https://3000-vincenzagen-tecnologie5-fldd6pv67np.ws-eu106.gitpod.io/api').subscribe(data => {
   
    this.results= data['results'];

    });
  }
}