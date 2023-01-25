import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { getVenue, showVenue } from "@mappedin/mappedin-js";

// See Trial API key Terms and Conditions
// https://developer.mappedin.com/guides/api-keys
const options = {
  venue: "mappedin-demo-mall",
  clientId: "5eab30aa91b055001a68e996",
  clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1"
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("app", { static: false }) mapEl!: ElementRef<HTMLElement>;

  async ngOnInit(): Promise<void> {
    const venue = await getVenue(options);
    const mapView = await showVenue(this.mapEl.nativeElement, venue);
  }
}
