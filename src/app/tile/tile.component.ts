import { Component, Input, OnInit } from '@angular/core';

export interface TileObject {
    label: string;
    value: string;
    type: "title" | "link" | "normal";
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

    @Input()
    tileObjects: TileObject[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
