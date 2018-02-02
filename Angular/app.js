/* global angular */

(function() {
var app = angular.module('store', [ ]);

app.controller('StoreController', function() {
    this.products = cars;
    });


var cars = [
    {
    name: 'Economy',
    price: 24.95,
    description: "Economy car",
    canRent: false,
    soldOut: false,
    images: {
        url: "http://www.economycarrental.com.ky/images/cars/car10.jpg"
    }
    },
        {
    name: 'Full Size',
    price: 34.95,
    description: "Full-size car",
    canRent: false,
    soldOut: false,
    images: {
        url: "http://stopngorentacar.com/wp-content/uploads/honda-accord.jpg"
    }
    },
        {
    name: 'Luxury',
    price: 64.95,
    description: "Luxury car",
    canRent: false,
    soldOut: false,
    images: {
       url: "https://car-pictures.cars.com/images/?IMG=USC60BMC291A021001.jpg&HEIGHT=600" 
    }
    },
        {
    name: 'Van',
    price: 44.95,
    description: "Van",
    canRent: false,
    soldOut: false,
    images: {
       url: "https://cdn.shopify.com/s/files/1/1762/3971/products/small-van_1024x1024.jpg?v=1490074112" 
    }
    }
];
})();