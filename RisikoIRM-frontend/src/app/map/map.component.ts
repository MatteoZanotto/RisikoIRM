import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, TileLayer } from 'leaflet';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map?: Map;
  private tileLayer?: TileLayer;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    this.map = new Map('map');
    this.map.setView([46.061, 11.131], 15);

    this.tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    this.tileLayer.addTo(this.map);

    /*
    this.map = L.map('map').setView([46.061, 11.131], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var polygon1 = L.polygon([
        [46.0618, 11.1239],
        [46.0623, 11.1258],
        [46.0597, 11.1282],
        [46.0589, 11.1269]
    ],{
        color: 'blue',
        fillColor: 'blue'
    }).addTo(this.map);

    var polygon2 = L.polygon([
        [46.0623, 11.1258],
        [46.0627, 11.1266],
        [46.0632, 11.1272],
        [46.0611, 11.1302],
        [46.0597, 11.1282]
    ],{
        color: 'green',
        fillColor: 'green'
    }).addTo(this.map);

    var polygon3 = L.polygon([
        [46.0632, 11.1272],
        [46.0648, 11.1281],
        [46.0643, 11.1311],
        [46.0626, 11.1323],
        [46.0611, 11.1302]
    ],{
        color: 'yellow',
        fillColor: 'yellow'
    }).addTo(this.map);

    polygon1.bindPopup("Territorio blu");
    polygon2.bindPopup("Territorio verde");
    polygon3.bindPopup("Territorio giallo");

    function  onMapClick(event:any):void {
      var popup = L.popup();
        popup
        .setLatLng(event.latlng)
        .setContent(`click on map at ${event.latlng}`)
        .openOn(this.map);
    }
  

    this.map.on('click', this.onMapClick);
    */
  }



}
