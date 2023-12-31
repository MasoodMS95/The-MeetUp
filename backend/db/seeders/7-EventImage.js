'use strict';

const { EventImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await EventImage.bulkCreate([
      {
        eventId: 1,
        url: 'https://wallpapercave.com/wp/kfgc4WQ.jpg',
        preview: true
      },
      {
        eventId: 2,
        url: 'https://cdn.discordapp.com/attachments/1137540999300796577/1138074029996126388/pexels-photo-1715495.png',
        preview: true
      },
      {
        eventId: 3,
        url: 'https://www.lilliputplayhomes.com/wp-content/uploads/2022/06/Crazy-Clubhouse-Final-Fracka.jpg',
        preview: true
      },
      {
        eventId: 4,
        url: 'https://www.lilliputplayhomes.com/wp-content/uploads/2022/06/Crazy-Clubhouse-Final-Fracka.jpg',
        preview: true
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'EventImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      eventId: { [Op.in]: [1,2,3] }
    }, {});
  }
};
