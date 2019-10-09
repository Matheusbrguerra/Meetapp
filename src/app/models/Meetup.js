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
        date: Sequelize.DATE
      },
      {
        sequelize
      }
    );
    return this;
  }
  static assosciate(models) {
    this.belongsTo(models.User, { foreignKey: "creator_id", as: "user" });
    this.belongsTo(models.File, { foreignKey: "banner_id", as: "banner" });
    this.belongsToMany(models.User, {
      through: "user_meetup"
    });
  }
}

export default Meetup;
