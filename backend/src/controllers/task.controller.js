const { TaskService } = require('../services');

const findTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const userid = +id;
    const tasks = await TaskService.findTasks(userid);

    res.status(200).json(tasks);
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { item, status } = req.body;
    const { id } = req.params;

    const userid = +id;
    await TaskService.createTask({ item, status, userid });

    res.status(200).json({ message: 'Tarefa cadastrada.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await TaskService.deleteTask(+id);

    res.status(200).json({ message: 'Tarefa excluída.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { status, item } = req.body;
    const { id } = req.params;

    await TaskService.updateTask(+id, item, status);

    res.status(200).json({ message: 'Tarefa atualizada.' });
  } catch (err) {
    res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = {
  findTasks,
  createTask,
  deleteTask,
  updateTask,
};

// teste