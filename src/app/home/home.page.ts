import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mapa: any = Leaflet.Map;

  constructor() {}

  ngOnInit(): void {
    const printCurrentPosition = async () => {
      const coor = await Geolocation.getCurrentPosition();

      this.carregaMapa(coor.coords.latitude,coor.coords.longitude);
      
    };
    printCurrentPosition();
  }

  carregaMapa(lat: any, long: any){
    console.log("Latitude", lat);
    console.log("longitude",long);

    this.mapa = Leaflet.map('mapId',{
      center: [ -23.976715368288563, -46.31001914877629],
      zoom:18
    })

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution:"Meu mapa"
    }).addTo(this.mapa)


   
    const ondeEstou = Leaflet.icon({
      iconUrl: "../../assets/icon/marcador.png",
      iconSize: [32,50],
      popupAnchor: [0,-14]
    })
    
    /*Praiamar*/
    Leaflet.marker({lat: -23.976715368288563, lng: -46.31001914877629}, {icon: ondeEstou}).addTo(this.mapa).bindPopup("Praiamar Shopping - R. Alexandre Martins, 80 - Aparecida, Santos - SP, 11025-202")

    /*Miramar*/
    Leaflet.marker({lat: -23.96528908347822,  lng: -46.33438560813353 }, {icon: ondeEstou}).addTo(this.mapa).bindPopup("Miramar Shopping - R. Euclides da Cunha, 21 - Gonzaga, Santos - SP, 11065-900")

    /*Balneario*/
    Leaflet.marker({lat: -23.968848964577425,   lng: -46.33241482066758 }, {icon: ondeEstou}).addTo(this.mapa).bindPopup("Shopping Parque Balneário - Av. Ana Costa, 549 - Gonzaga, Santos - SP, 11060-003")

    /*Patio Iporanga*/
    Leaflet.marker({lat: -23.964952154661468,   lng: -46.33239177156978 }, {icon: ondeEstou}).addTo(this.mapa).bindPopup("Shopping Pátio Iporanga - Av. Ana Costa, 465 - Gonzaga, Santos - SP, 11060-001")



  }

}
