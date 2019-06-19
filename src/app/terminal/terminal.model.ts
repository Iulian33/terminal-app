export class TerminalModel {
  public commandString: string;
  public commandOutput: string;
  public status: string;

  constructor(
    commandString: string,
    commandOutput: string,
    status: string,
  ) {
    this.commandString = commandString;
    this.commandOutput = commandOutput;
    this.status = status;
  }
}
