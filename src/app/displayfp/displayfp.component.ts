import { Component, OnInit, AfterViewInit,   ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
declare var L:any;


@Component({
  selector: 'app-displayfp',
  templateUrl: './displayfp.component.html',
  styleUrls: ['./displayfp.component.css']
})
export class DisplayfpComponent implements OnInit {
//@Output() passEntry: EventEmitter<any> = new EventEmitter();
@Output() action = new EventEmitter();
map: any;
img:any; 
val; 
parameter:any;
newcorners;
onClickMe;
//@ViewChild('myDiv') myDiv: ElementRef;
  constructor(private route:ActivatedRoute) {
  	this.route.params.subscribe((params: Params) => {
  		console.log (params['cor'] )
  		this.newcorners = JSON.parse(params['cor']);
		console.log(this.newcorners[0]['cor1lat']) ;
		})
   }

   test(){
      console.log('test')
    }
 handleclick(e) {
   e.preventDefault();
   this.action.emit(true);
        console.log('hey I am  clicked in child');
    }
    clickEvent() {
        console.log('You clicked me')
    }
    
  ngOnInit() {


  	var imageUrl =  ('./assets/ytest0.png');
  	this.map = L.map('map').setView([25.321824, 55.520725],17);

  	L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	{   
	    maxZoom: 22,
	    minZoom:0
	}).addTo(this.map);





 

//var customPopup = "<div class='test'>Mozilla Toronto Offices<br/>  <button id='button-submit' type='button'>Save Changes</button> <button  (click)='onClickMe()'>click</button></div>";







  	

  	this.map.whenReady( ()=> {

      var popupMy =L.Util.template('<h2>my custom popup</h2> <button id="button-submit" (onClick)="clickEvent()">Click Me</button>')
var customPopup2 = "<div class='test'>2Mozilla Toronto Offices<br/> <button (click)=handleclick()>test</button></div>";
var customOptions =
        {
        'maxWidth': '500',
        'className' : 'custom'
        }

var icon = L.divIcon({className: 'custom-div-icon', 
        html: "<div class='marker-pin'></div>", 
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-30]
    }),
 greenicon = L.divIcon({className: 'custom-div-icon', 
        html: "<div style='background-color:green;' class='marker-pin'></div>", 
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-30]
    });
    
var custommarker = L.marker([25.322824, 55.520725], {
      icon: icon
    }).addTo(this.map).bindPopup(customPopup2)
          .openPopup();
    
icon = L.divIcon({
        className: 'custom-div-icon',
        html: "<div style='background-color:#4838cc;' class='marker-pin'></div>",
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0,-30]
    });
custommarker = L.marker([25.321824, 55.520725], {
      icon: icon
    }).addTo(this.map).bindPopup(popupMy)
          .openPopup();


		console.log(this.newcorners[0]['cor1lat'])
      	//console.log('test');
      	var img = L.distortableImageOverlay(imageUrl,{
      		//actions: [L.ScaleAction,  L.RotateAction, L.FreeRotateAction, L.LockAction, L.OpacityAction,  L.ExportAction, L.DeleteAction],
      		
      		 //mode: 'lock',
           editable: false,
        selected: false,
        suppressToolbar: true,
        corners: [
	    L.latLng(this.newcorners[0]['cor1lat'],this.newcorners[0]['cor1lng']),
	    L.latLng(this.newcorners[0]['cor2lat'],this.newcorners[0]['cor2lng']),
	    L.latLng(this.newcorners[0]['cor3lat'],this.newcorners[0]['cor3lng']),
	    L.latLng(this.newcorners[0]['cor4lat'],this.newcorners[0]['cor4lng']),	   
	  	],
    		
  		fullResolutionSrc: "large.jpg"

  
      	}).addTo(this.map);

       

      

      });
    


  }

}
