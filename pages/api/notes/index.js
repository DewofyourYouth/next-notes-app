import Note from "../../../models/note";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

const NotesApi = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const notes = await Note.find();
        res.status(200).json({ success: true, data: notes });
      } catch (err) {
        res.status(400).json({ success: false });
        console.log(err);
      }
      break;
    case "POST":
      try {
        const note = await Note.create(req.body);
        res.status(201).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};

export default NotesApi;
