import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var L:any;


@Component({
  selector: 'app-createfp',
  templateUrl: './createfp.component.html',
  styleUrls: ['./createfp.component.css']
})
export class CreatefpComponent {
  title = 'wrapmap';
  map: any;
  img:any;
 
  val; 
  parameter:any;
  //map;

  fourcorners=[];
  initialWidth = 0;
   constructor(private router:Router){

   	this.img = null;
   	

   }
   ngOnInit() { 

//console.log(scale )  

   	var imageUrl =  ('./assets/ytest0.png')

   	this.map = L.map('map').setView([25.321824, 55.520725],17);
      //this.map.addGoogleMutant();
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
{   
    maxZoom: 22,
    minZoom:0
}).addTo(this.map);
       this.map.whenReady( ()=> {

      	console.log('test');
      	var img = L.distortableImageOverlay(imageUrl,{
      		actions: [L.ScaleAction,  L.RotateAction, L.FreeRotateAction, L.LockAction, L.OpacityAction,  L.ExportAction, L.DeleteAction],
      		
      		 mode: 'freeRotate',
        selected: true,
    		
  fullResolutionSrc: "large.jpg"

  // mode: 'freeRotate',
      	}).addTo(this.map);
       	L.DomEvent.on(img._image, "load", img.editing.enable, img.editing, console.log(img._events), console.log(img._corners));
//       	//console.log( this.map.project([0,img._image.width], this.map.getZoom()));
      	
//       	this.fourcorners=img.getCorners()
//       	this.initialWidth = this.calculateDistance(this.fourcorners[0].lat, this.fourcorners[0].lng, this.fourcorners[1].lat, this.fourcorners[1].lng)
// //img.scaleBy(1.5);
// 		this.img = img;
console.log(img);

      	img.on('edit', (img1)=> {
      		console.log(img._corners)
      		console.log(L.DomUtil)
          var cor1 = img.getCorner(0);
          console.log(cor1[0] + cor1[1]);
          var cor2 = img.getCorner(1);
          var cor3 = img.getCorner(2);
          var cor4 = img.getCorner(3);
          var width = this.calculateDistance(cor1.lat, cor1.lng, cor2.lat, cor2.lng)
          var height = this.calculateDistance(cor1.lat, cor1.lng, cor3.lat, cor3.lng)
          //console.log(this.calculateScale(width, this.initialWidth) + " % ");
          this.parameter=[{"cor1lat":cor1.lat,"cor1lng":cor1.lng,"cor2lat":cor2.lat,"cor2lng":cor2.lng,"cor3lat": cor3.lat,"cor3lng":cor3.lng,"cor4lat": cor4.lat,"cor4lng":cor4.lng}]
         this.parameter = JSON.stringify(this.parameter);
         console.log(typeof (this.parameter))
          this.val=this.calculateScale(width/2.0, this.initialWidth/2.0);
          
      	 }, img);

      	L.DomEvent.on(img._image, 'load', (img1)=> {
      		console.log(img._corners)
      		var cor1 = img.getCorner(0);
          var cor2 = img.getCorner(1);
          var cor3 = img.getCorner(2);
          var cor4 = img.getCorner(3);
      		this.parameter=[{"cor1lat":cor1.lat,"cor1lng":cor1.lng,"cor2lat":cor2.lat,"cor2lng":cor2.lng,"cor3lat": cor3.lat,"cor3lng":cor3.lng,"cor4lat": cor4.lat,"cor4lng":cor4.lng}]
         this.parameter = JSON.stringify(this.parameter);

  			this.fourcorners=img.getCorners()
	       	this.initialWidth = this.calculateDistance(this.fourcorners[0].lat, this.fourcorners[0].lng, this.fourcorners[1].lat, this.fourcorners[1].lng)
			this.img = img;
      	 }, img);     
      });
   }

   saveScaleOfMap(){
   	this.router.navigateByUrl('/display/'+ this.parameter +'');
   	
   }

setScaleOfMap(){
	var scale = this.val;
	var cor1 = this.img.getCorner(0);
    var cor2 = this.img.getCorner(1);
    var cor3 = this.img.getCorner(2);
    var width = this.calculateDistance(cor1.lat, cor1.lng, cor2.lat, cor2.lng)
    var currentscale = this.calculateScale(width/2.0, this.initialWidth/2.0);
    console.log(currentscale);
    var diff = ((scale - currentscale)/100);
    console.log(diff);
    this.img.scaleBy(1+diff);
}
calculateScale(width, initialWidth){
	var dif = width-initialWidth;
	var scale = (dif/initialWidth) * 100;
	return scale;	
}

calculateDistance(lat1, lon1, lat2, lon2){
    var R = 6373000;

    lat1 = lat1 * Math.PI/180;
    lon1 = lon1 * Math.PI/180;
    lat2 = lat2 * Math.PI/180;
    lon2 = lon2 * Math.PI/180;

    var dlon = lon2 - lon1
    var dlat = lat2 - lat1

    var a = Math.sin(dlat / 2)**2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2)**2
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    var distance = R * c;
    return distance;
  }




}
