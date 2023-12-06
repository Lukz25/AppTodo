import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';


import * as Leaflet from 'leaflet';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

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
      center: [ lat, long],
      zoom:18
    })

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution:"Meu mapa"
    }).addTo(this.mapa)


    const usuario = Leaflet.icon({
      iconUrl: '../../assets/icon/marcador.png',
      iconSize: [50,32],
      popupAnchor: [0,-14]
    })

    const praiamar = Leaflet.icon({
      iconUrl: '../../assets/icon/praiamar.png',
      iconSize: [70,50],
      popupAnchor: [0,-14]
    })

    
    const balneario = Leaflet.icon({
     iconUrl: '../../assets/icon/logo_BALNEARIO_horizontal_cor.png',
     iconSize: [70,22],
     popupAnchor: [0,-14]
   })

   
   const iporanga = Leaflet.icon({
     iconUrl: '../../assets/icon/patio_iporanga-removebg-preview.png',
     iconSize: [70,50],
     popupAnchor: [0,-14]
   })

   
   const passarela = Leaflet.icon({
     iconUrl: '../../assets/icon/passarela-removebg-preview.png',
     iconSize: [70,70],
     popupAnchor: [0,-14]
   })

   
   const miramar = Leaflet.icon({
     iconUrl: '../../assets/icon/logo-cor-miramar (1).png',
     iconSize: [70,18],
     popupAnchor: [0,-14]
   })

   
   const rondon = Leaflet.icon({
     iconUrl: '../../assets/icon/rondon-removebg-preview.png',
     iconSize: [70,50],
     popupAnchor: [0,-14]
   })

   
   const boulevard = Leaflet.icon({
     iconUrl: '../../assets/icon/boulevard-removebg-preview .png ',
     iconSize: [70,32],
     popupAnchor: [0,-14]
   })
   
   const sf = Leaflet.icon({
     iconUrl: '../../assets/icon/sf-removebg-preview.png',
     iconSize: [70,50],
     popupAnchor: [0,-14]
   })

   
   const onn = Leaflet.icon({
     iconUrl: '../../assets/icon/onn-removebg-preview.png',
     iconSize: [70,50],
     popupAnchor: [0,-14]
   })

   
   const embaré = Leaflet.icon({
     iconUrl: '../../assets/icon/embare-removebg-preview.png',
     iconSize: [70,50],
     popupAnchor: [0,-14]
   })
    
  

   /*Usuário*/
   Leaflet.marker({lat: lat, lng: long}, {icon: usuario}).addTo(this.mapa).bindPopup("Você está Aqui")
 
   /*Praiamar*/
   Leaflet.marker({lat: -23.976715368288563, lng: -46.31001914877629}, {icon: praiamar}).addTo(this.mapa).bindPopup("Praiamar Shopping - R. Alexandre Martins, 80 - Aparecida, Santos - SP, 11025-202")

   /*Miramar*/
   Leaflet.marker({lat: -23.96528908347822,  lng: -46.33438560813353 }, {icon: miramar}).addTo(this.mapa).bindPopup("Miramar Shopping - R. Euclides da Cunha, 21 - Gonzaga, Santos - SP, 11065-900")

   /*Balneario*/
   Leaflet.marker({lat: -23.968848964577425,   lng: -46.33241482066758 }, {icon: balneario}).addTo(this.mapa).bindPopup("Shopping Parque Balneário - Av. Ana Costa, 549 - Gonzaga, Santos - SP, 11060-003")

   /*Patio Iporanga*/
   Leaflet.marker({lat: -23.964952154661468,   lng: -46.33239177156978 }, {icon: iporanga}).addTo(this.mapa).bindPopup("Shopping Pátio Iporanga - Av. Ana Costa, 465 - Gonzaga, Santos - SP, 11060-001")

   /*Boulevard Shopping*/
   Leaflet.marker({lat: -23.967351223484314,   lng: -46.333840355597964 }, {icon: boulevard}).addTo(this.mapa).bindPopup("Bulevar Shopping - R. Marcílio Dias, 27 - Gonzaga, Santos - SP, 11060-210")

   /*Embaré Shopping*/
   Leaflet.marker({lat:-23.97284121455022,   lng: -46.318777071050796 }, {icon: embaré}).addTo(this.mapa).bindPopup("Shopping Embaré Santos - Av. Dr. Epitácio Pessoa, 172 - Embaré, Santos - SP, 11040-096")

   /*Shopping São Francisco*/
   Leaflet.marker({lat:-23.971148717523743,   lng: -46.30728615559797 }, {icon: sf}).addTo(this.mapa).bindPopup("Shopping Center São Francisco - Av. Dr. Pedro Lessa, 1640 - Ponta da Praia, Santos - SP, 11025-002")

   /*Shopping Rondon*/
   Leaflet.marker({lat:-23.977618848845243,   lng: -46.31127728227291 }, {icon: rondon}).addTo(this.mapa).bindPopup("Shopping Comercial Rondon - Av. Dr. Epitácio Pessoa, 396 - Aparecida, Santos - SP, 11030-600")

   /*Shopping Onn*/
   Leaflet.marker({lat:-23.96748402423183,   lng: -46.33824804025736 }, {icon: onn}).addTo(this.mapa).bindPopup("Shopping Onn - Av. Pres. Wilson - Gonzaga, Santos - SP, 11065-200")
   
   /*Shopping Passarela*/
   Leaflet.marker({lat:-23.933044053918813,   lng: -46.328142409003846 }, {icon: passarela}).addTo(this.mapa).bindPopup("Shopping Passarela - R. Augusto Severo, 41 - Centro, Santos - SP, 11010-050")
}
}
