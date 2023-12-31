'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(
        models.Venue,
        {foreignKey: 'venueId'}
      );
      Event.hasMany(
        models.EventImage,
        {foreignKey: 'eventId', onDelete: 'CASCADE',  hooks: true}
      );
      Event.hasMany(
        models.Attendance,
        {foreignKey: 'eventId', onDelete: 'CASCADE',  hooks: true}
      )
    }
  }
  Event.init({
    venueId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type: {
      type: DataTypes.ENUM,
      values: ['Online', 'In person']
    },
    capacity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
