import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logService = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logService.asObservable();
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();
  constructor() { 
    // this.logs = [
    //   { id: '1', text: 'Generated Components', date: new Date() },
    //   { id: '2', text: 'Added Bootstrap', date: '1/2/2018' },
    //   { id: '3', text: 'Added Logs Component', date: '1/2/2018' },
    // ]

    this.logs =[]
  }

  getLogs():Observable<Log[]>{
    return of(this.logs);
  }

  setFormLog(log:Log){
    this.logService.next(log);
  }

  addLog(log:Log){
    this.logs.unshift(log);
  }
   
  updateLog(log:Log){
    this.logs.forEach((cur,index) =>{
      if(log.id === cur.id){
      this.logs.splice(index,1);
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
   // this.logs.unshift(log);
  }

  clearState(){
    this.stateSource.next(true);
  }

}
