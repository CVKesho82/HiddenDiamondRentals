'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Homes',[{
    name: "Sandy Springs Sanctuary",
    description:"3500 sq ft, 5 bedroom, 4 baths, sleeps 12, close to Perimeter Mall, Cox Enterprises, Costco",
    city: "Sandy Springs",
    createdAt: new Date(),
    updatedAt: new Date(), 
    },
    {
      name: "Buckhead Barracks",
      description:"5000 sq ft, 6 bedroom, 3.5 baths, sleeps 16, minutes from Lenox Mall, Phipps Plaza, Fine Dining",
      city: "Buckhead",  
      createdAt: new Date(),
      updatedAt: new Date(),    
    },
    {
      name: "Smyrna Sanctum",
      description:"2000 sq ft, 3 bedroom, 2.5 baths, sleeps 6, minutes the Battery",
      city: "Smyrna",
      createdAt: new Date(),
      updatedAt: new Date(), 
    },
    {
      name: "Westend Wonderland",
      description:"2500 sq ft, 3 bedroom, 2.0 baths, sleeps 6, minutes to the Mercedez Benz Statuim, Centennial Park, State Farm Arena",
      city: "Atlanta", 
      createdAt: new Date(),
      updatedAt: new Date(),        
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
