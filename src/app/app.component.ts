import { Component, OnInit } from '@angular/core';
// import { PhotosService } from 'src/services/photos.service';
import { TodosService } from 'src/services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jobProject';
  todoList: any;
  // allPhotos= [];
  
constructor( private _todos: TodosService){

}
  ngOnInit(): void {
    this.gettodos();
  }

    // getPhotos(){
    //   this._photosService.getPhotos(1).subscribe(res => {
    //     console.log(res);
    //     this.allPhotos=res
        
    //   })
    // }

    gettodos(){
      this._todos.gettodos().subscribe( res => {
        console.log(res);
        this.todoList= res;
        
      })
    }
}
