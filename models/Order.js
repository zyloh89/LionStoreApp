module.exports = function (sequelize, DataTypes) {

  const Order = sequelize.define(
    "Order", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: true
    }

    //Address - future
  },
  )
  Order.associate = function (models) {
    Order.belongsToMany(models.Product, { through: 'products_in_order', as: 'Products' });
  }

  return Order;
};