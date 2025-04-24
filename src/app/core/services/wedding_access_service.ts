import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeddingAccessService {
  private weddingDate = new Date('2025-06-07T14:30:00');
  private weddingEnd = new Date('2025-06-08T21:00:00');

  ipIsFromSpain: boolean = false;
  userIp: string = '';
  now: Date = new Date();

  constructor() {}

  initLocation(): Promise<void> {  
    return fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        this.userIp = data.ip;
        this.ipIsFromSpain = data.country_code.toLowerCase() === 'es';
      })
      .catch(err => {
        this.ipIsFromSpain = true;
      });
  }

  setIPInfo(ip: string, country: string) {
    this.userIp = ip;
    this.ipIsFromSpain = country.toLowerCase() === 'es';
  }

  updateNow() {
    this.now = new Date();
  }

  isBeforeWedding(): boolean {

    console.log(this.now);
    console.log(this.weddingDate);
    
    
    return this.now < this.weddingDate;
  }

  isDuringWedding(): boolean {
    return this.now >= this.weddingDate && this.now <= this.weddingEnd;
  }

  isAfterWedding(): boolean {
    return this.now > this.weddingEnd;
  }
}
