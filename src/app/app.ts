
import { Component} from '@angular/core';
import {Header} from './components/header/header';
import {Productcard} from './components/productcard/productcard';
import { RouterModule } from '@angular/router';
import { Carts } from './components/carts/carts';

@Component({
  selector: 'app-root',
  imports: [
    Header, 
    Productcard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {

}
