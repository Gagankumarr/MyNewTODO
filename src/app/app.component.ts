import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jobProject';
  allPhotos= [];
constructor( private _photosService: PhotosService){

}
  ngOnInit(): void {
    this.getPhotos();
  }

    getPhotos(){
      this._photosService.getPhotos(1).subscribe(res => {
        console.log(res);
        this.allPhotos=res
        
      })
    }
}
