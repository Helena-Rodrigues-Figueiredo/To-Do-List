const TaskModel = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    item: DataTypes.STRING,
    status: DataTypes.STRING,
    userid: { type: DataTypes.INTEGER, foreignKey: true }
  },
  {
    tableName: 'tasks',
    timestamps: false,
    underscored: true
  });

  Task.associate = (models) => {
    Task.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
  };

  return Task;
};

module.exports = TaskModel;
