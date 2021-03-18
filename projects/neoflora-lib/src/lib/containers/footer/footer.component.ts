import {Component, OnInit} from '@angular/core';
import {IconService} from "../../services/icon.service";

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public iconService: IconService) {
  }

  ngOnInit(): void {
  }

}