import Meetup from "../models/Meetup";

class MeetupController {
  async store(req, res) {
    const { title, description, location, date } = await req.body;

    await Meetup.create({
      title,
      description,
      location,
      date,
      creator_id: req.userId,
      banner_id: req.body.banner_id
    });

    return res.json({ date });
  }
}
export default new MeetupController();
