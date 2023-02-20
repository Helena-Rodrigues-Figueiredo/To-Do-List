module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('tasks',
      [
        {
          item: 'Fazer café',
          status: 'Concluído',
          userid: 1
        },
        {
          item: 'Caminhar',
          status: 'Pendente',
          userid: 1
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('tasks', null, {});
  },
};
