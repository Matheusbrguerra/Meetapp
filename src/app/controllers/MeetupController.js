import * as Yup from "yup";

import Meetup from "../models/Meetup";
import File from "../models/File";

class MeetupController {
  async index(req, res) {
    const meetups = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetups);
  }

  async store(req, res) {
    const user_id = req.userId;
    const meetup = await Meetup.create({
      ...req.body,
      user_id
    });
    return res.json(meetup);
  }
}
export default new MeetupController();
