const { Task } = require('../models');

const findTasks = async (userid) => {
  const allTasks = await Task.findAll({ where: { userid } });
  return allTasks;
};

const createTask = async (item, status, userid) => {
  return await Task.create(item, status, userid)
};

const deleteTask = async (id) => {
  return await Task.destroy({ where: { id } });
}

const updateTask = async (id, item, status) => {
  return await Task.update({ item, status }, { where: { id } });
}

module.exports = {
  findTasks,
  createTask,
  deleteTask,
  updateTask
};
