import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  oszlopok=[
    {key:"id", text:"Azonosító", textEn:"#", type:"plain", class:"form-control"},
    {key:"userId", text:"Felhasználó", textEn:"User", type:"number", class:"form-control"},
    {key:"title", text:"Cím", textEn:"Title", type:"text", class:"form-control"},
    {key:"completed", text:"Jóváhagyva", textEn:"Completed", type:"checkbox", class:"form-check-input"},
  ]
  constructor() { }
}

