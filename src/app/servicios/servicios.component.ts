import { Component } from '@angular/core';
import { JsonplaceholderService } from '../apiServices/jsonplaceholder.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

  posts = {};

  constructor(private JsonplaceholderService: JsonplaceholderService){
    this.JsonplaceholderService.allPost().subscribe(data =>{
      this.posts = data;
    });
  }

}
