import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-Loading',
  templateUrl: './Loading.component.html',
  styleUrls: ['./Loading.component.css']
})
export class LoadingComponent  {

  @Input() show: boolean = false;

}
