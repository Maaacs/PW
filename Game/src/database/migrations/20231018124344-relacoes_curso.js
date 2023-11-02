'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addConstraint('Cursos', {
      type: 'foreign key',
      fields: ['areaId'],
      name: 'curso_fk',
      references: {
      table: 'Areas',
      field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
      })
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable(
        'Cursos',
        'curso_area_fk');
      }
};
