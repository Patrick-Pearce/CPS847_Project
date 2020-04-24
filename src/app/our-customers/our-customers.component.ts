import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.css']
})
export class OurCustomersComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}