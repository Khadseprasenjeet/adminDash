import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent {



  imageObject: Array<object> = [{
    image: 'assets/AppLogo.png',
   
    alt: 'alt of image',
    title: 'title of image'
}, {
    image: 'assets/ccc.png', // Support base64 image
    
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/AppLogo.png',
 
  alt: 'alt of image',
  title: 'title of image'
}, {
  image: 'assets/ccc.png', // Support base64 image
  
  title: 'Image title', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];
}
