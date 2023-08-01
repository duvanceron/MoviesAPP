import { Component, EventEmitter, Output } from '@angular/core';
import { LeafletMouseEvent, Marker, icon, latLng, marker, tileLayer } from 'leaflet';
import { coordinate } from './coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  @Output() 
  coordinate :EventEmitter<coordinate> = new EventEmitter<coordinate>();
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 30,
        attribution: '...',
      }),
    ],
    zoom: 15,
    center: latLng(1.665850493397489, -437.0004272460938),
  };
  layer: Marker<any>[] = [];

  handleClick(event: LeafletMouseEvent) {
    const lat = event.latlng.lat;
    const long = event.latlng.lng;
    this.layer =[];
    this.layer.push(marker([lat,long],{
      icon: icon ({
        iconSize:[25,41],
        iconAnchor:[13,41],
        iconUrl: 'assets/marker-icon.png',
        iconRetinaUrl: 'assets/marker-icon-2x.png',
        shadowUrl:'assets/marker-shadow.png',


      })
    }));
    this.coordinate.emit({latitude:lat, longitude:long});
  }
}
