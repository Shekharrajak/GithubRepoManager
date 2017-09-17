import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-org-detail',
  templateUrl: './user-org-detail.component.html',
  styleUrls: ['./user-org-detail.component.css']
})
export class UserOrgDetailComponent implements OnInit {

  constructor() { }
  @Input() userdata:any;
  ngOnInit() {
  }

}
