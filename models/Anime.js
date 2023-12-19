import { model, Schema } from "mongoose";

const AnimeSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});

const Anime = model("Anime", AnimeSchema);
export default Anime;
