/*'use strict';

/** @type {import('sequelize-cli').Migration} 
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addConstraint('Cursos', {
      type: 'foreign key',
      fields: ['cursoId'],
      name: 'curso_fk',
      references: {
      table: 'Cursos',
      field: 'id'
      },
      onDelete: 'restrict',
      onUpdate: 'restrict'
      })
      },
  },

    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable(
        'Users',
        'usuario_fk');
};*/
