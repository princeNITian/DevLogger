import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  constructor() { 
    this.logs = [
      { id: '1', text: 'Generated Components', date: new Date() },
      { id: '2', text: 'Added Bootstrap', date: '1/2/2018' },
      { id: '3', text: 'Added Logs Component', date: '1/2/2018' },
    ]
  }

  getLogs(){
    return this.logs;
  }
}
