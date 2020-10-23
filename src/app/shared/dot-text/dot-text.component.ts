import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dot-text',
  templateUrl: './dot-text.component.html',
  styleUrls: ['./dot-text.component.scss'],
})
export class DotTextComponent implements OnInit {
  @Input() text: string;
  @Input() nameClass: string;
  constructor() {}

  ngOnInit(): void {}
}
