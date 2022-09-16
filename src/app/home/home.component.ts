import { Component, OnInit } from '@angular/core';
import { TileObject } from '../tile/tile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public projectOne: TileObject[] = [
        {
            label: "title",
            value: "youtube web scraper",
            type: "title",
        },
        {
            label: "link",
            value: "https://github.com/PretzelStec/YoutubeWebScraper",
            type: "link",
        },
        {
            label: "description",
            value: "nodeJS webscraper using puppeteer that grabs the first 10 comments of a YouTube video and logs the array.",
            type: "normal",
        },
    ];

    public projectTwo: TileObject[] = [
        {
            label: "test 1",
            value: "test 1 value",
            type: "title",
        },
        {
            label: "test 2",
            value: "test 2 value",
            type: "normal",
        },
        {
            label: "test 3",
            value: "test 3 value",
            type: "normal",
        },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
