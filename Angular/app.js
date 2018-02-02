/* global angular */

(function() {
var app = angular.module('store', [ ]);

app.controller('StoreController', function() {
    this.products = cars;
    });

app.controller('RentController', function() {
    this.rent = function(cars){
        if(cars.available > cars.rented){
            cars.canRent = true;
            cars.rented ++;
        } else if (cars.rented === cars.available) {
            cars.canRent = false;
        }
    }
    });

var cars = [
    {
    name: 'Economy',
    price: 24.95,
    description: "Economy car",
    canRent: true,
    available: 30,
    rented: 10,
    soldOut: false,
    images: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3n-nvXslwdY8u945aMceBKcWFg6sjWl6R4wDHMwQgWBtpng3oGA"
    }
    },
        {
    name: 'Full Size',
    price: 34.95,
    description: "Full-size car",
    canRent: true,
    available: 20,
    rented: 10,
    soldOut: false,
    images: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvlLCcS3oa-Y7pMvvmAER0gGOu8ULDydlnFQ0cA_LccbY17xnCA"
    }
    },
        {
    name: 'Luxury',
    price: 64.95,
    description: "Luxury car",
    canRent: true,
    available: 10,
    rented: 4,
    soldOut: false,
    images: {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66UugxtFk7YHUSjUFGd6Tooof-diRJSjYFWKUT5pAGBPg7VXj1Q" 
    }
    },
        {
    name: 'Van',
    price: 44.95,
    description: "Van",
    canRent: true,
    available: 10,
    rented: 2,
    soldOut: false,
    images: {
       url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSziI4b3RHQ0OYgahU3f8C7G-jdk2HPybSkB6ECAX2HMJPzLdGj" 
    }
    }
];
})();