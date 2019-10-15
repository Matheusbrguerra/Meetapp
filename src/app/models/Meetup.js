import Sequelize, { Model } from "sequelize";
import User from "./User";
import File from "./File";

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        date: Sequelize.DATE,
        file_id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true
        }
      },
      {
        sequelize
      }
    );
    return this;
  }
  static assosciate(models) {
    this.belongsTo(models.File, { foreignKey: "file_id" });
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}

export default Meetup;
