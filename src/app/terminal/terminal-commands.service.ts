export class TerminalCommandsService {

  echo(str: string) {
    return str.replace(/(^["]|["]$)/g, '');
  }
}
