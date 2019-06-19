import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalCommandComponent } from './terminal/terminal-command/terminal-command.component';
import { TerminalOutputComponent } from './terminal/terminal-output/terminal-output.component';
import { TerminalService } from './terminal/terminal.service';
import { TerminalCommandsService } from './terminal/terminal-commands.service';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalCommandComponent,
    TerminalOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TerminalService, TerminalCommandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
