import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
 url = environment.ENDPOINT;
  constructor(private http: HttpClient) { 
    
  }
 

}
