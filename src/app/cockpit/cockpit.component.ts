import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createServer = new EventEmitter<{ serverName:string, serverContent: string }>()
  @Output() createBluePrint = new EventEmitter<{ serverName:string, serverContent: string }>()
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.createServer.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.createBluePrint.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
