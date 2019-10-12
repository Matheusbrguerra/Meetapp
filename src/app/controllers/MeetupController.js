import * as Yup from "yup";

import Meetup from "../models/Meetup";

class MeetupController {
  async index(req, res) {
    const meetups = await Meetup.findAll();

    return res.json(meetups);
  }

  async store(req, res) {
    const { title, description, date, location, banner_id } = req.body;

    await Meetup.create({
      title,
      description,
      date,
      location,
      creator_id: req.userID,
      banner_id
    });

    return res.json({ id: req.userID });
  }
}
export default new MeetupController();
