import { TerminalCommandsService } from './terminal-commands.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TerminalModel } from './terminal.model';

@Injectable()
export class TerminalService {
  historyChanges = new Subject<TerminalModel[]>();
  commandsHistory: TerminalModel[] = [];

  static checkCommand(commandString: string) {
    return commandString.match(/'[^']*'|"[^"]*"|\S+/g) || [];
  }

  constructor(private termCommandsService: TerminalCommandsService) {
  }

  getCommandsHistory() {
    return this.commandsHistory.slice();
  }

  executeCommand(commandString: string) {
    const commandOptions = TerminalService.checkCommand(commandString);
    switch (commandOptions[0]) {
      case 'echo' :
        if (commandOptions[1]) {
          const result = this.termCommandsService.echo(commandOptions[1]);
          this.addCommandInHistory(commandString, result, 'success');
        }
        break;
      case 'help':
        this.addCommandInHistory(
          commandString,
          `All Supported Commands : \n echo, clear`,
          'success'
        );
        break;
      case 'clear' :
        this.clearConsole();
        break;
      default:
        if (commandString) {
          this.addCommandInHistory(
            commandString,
            `command : "${commandString}" not found !`,
            'error-command'
          );
        }
    }
  }

  clearConsole() {
    this.commandsHistory = [] as TerminalModel[];
    this.historyChanges.next(this.commandsHistory);
  }

  addCommandInHistory(command: string, output: string, status: string) {
    this.commandsHistory.push({
      commandString: command,
      commandOutput: output,
      status
    });
    this.historyChanges.next(this.commandsHistory);
  }
}
