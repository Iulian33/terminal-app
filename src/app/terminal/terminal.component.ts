import { Component, OnInit } from '@angular/core';
import { TerminalService } from './terminal.service';
import { TerminalModel } from './terminal.model';
import { element } from 'protractor';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: [ './terminal.component.scss' ]
})
export class TerminalComponent implements OnInit {
  terminalHistory: TerminalModel[];

  constructor(private terminalService: TerminalService) {
  }

  ngOnInit() {
    this.terminalService.historyChanges.subscribe(
      (response: TerminalModel[]) => {
        console.log(response);
        this.terminalHistory = this.terminalService.getCommandsHistory();
      }
    );
  }

  handleCommand(event) {
    if (event.code === 'Enter') {
      const command = event.target.value;
      this.terminalService.executeCommand(command);
      event.target.value = '';
    }
  }

  focusTerminal(event) {
    const terminalWindow = event.path.find((el) => {
      if (el.querySelector('#terminal')) {
        return el;
      }
    });
    const commandField = terminalWindow.querySelector('input');
    if (commandField) {
      commandField.focus();
    }
  }
}
