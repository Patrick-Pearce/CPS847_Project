import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-time',
  template: `
    <div id='currentTime'>
      <p id="time">Current time is {{ dateToday | date:'yyyy-MM-dd HH:mm:ss' }}</p>
    </div>
  `,
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  dateToday: number = Date.now();
  id;
  constructor() { }

  refreshDate() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = "Current time is "+date+' '+time;
    document.getElementById("time").innerHTML = dateTime;
  }
  ngOnInit() {
    this.id = setInterval(() => {
    this.refreshDate(); 
     }, 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}