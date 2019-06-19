import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-output',
  templateUrl: './terminal-output.component.html',
  styleUrls: ['./terminal-output.component.scss']
})
export class TerminalOutputComponent implements OnInit {

  @Input() terminalOutput: string;
  constructor() { }

  ngOnInit() {
  }

}
