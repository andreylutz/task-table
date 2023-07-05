'use strict';

const faker = require('faker')

faker.locale = "ru"


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

  const users = []

  for (let i = 0; i < 5; i++) {
    users.push({
      username: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      register_date: faker.date.recent().toJSON(),
      code: faker.datatype.number(),
      city: faker.address.city(),
      createdAt: faker.date.recent().toJSON(),
      updatedAt: faker.date.recent().toJSON(),
    })
  }

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
