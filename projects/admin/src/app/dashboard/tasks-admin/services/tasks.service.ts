import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    return this.http.get('https://crud-a5h4.onrender.com/tasks/all-tasks') 
  }
}
