import dbConnect from "../../../utils/dbConnect";
import Note from "../../../models/Note";

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch (method) {
        case "GET":
            try{
                const notes = await Note.find();
                res.status(200).json(notes);

            }
            catch(err){
                console.log(err);
            }
            break;
        case "POST":
            const note = await Note.create(req.body);
            res.status(201).json(note);
            break;
        default:
            res.status(405).json({
                message: `Method ${method} not allowed`
            });
            break;

    }
};