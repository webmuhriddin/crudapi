import { Router } from "express";
import Anime from "../models/Anime.js";
const router = Router();

// get all anime
router.get("/", async (req, res) => {
  try {
    const anime = await Anime.find({});

    if (!anime) {
      res.json({
        error: "this array empy",
      });
      return;
    }

    res.status(200).json({
      message: "get all anime",
      anime: anime,
    });
  } catch (error) {
    console.log(error);
  }
});

// get single anime

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const singleAnime = await Anime.findById(id);

    res.status(200).json({
      message: "get single anime",
      anime: singleAnime,
    });
  } catch (error) {
    console.log(error);
  }
});

// create anime

router.post("/create", async (req, res) => {
  try {
    const { image, title, description, category } = req.body;

    if (!image || !title || !description || !category) {
      res.json({ error: "please complete all sections" });
      return;
    }

    const newAnime = await Anime.create({
      image,
      title,
      description,
      category,
    });

    res.status(200).json({
      message: "create single anime",
      anime: newAnime,
    });
  } catch (error) {
    console.log(error);
  }
});

// update anime

router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { image, title, description, category } = req.body;

    const updatedAnime = await Anime.findByIdAndUpdate(
      id,
      { image, title, description, category },
      { new: true }
    );

    console.log(id);

    res.status(200).json({
      message: "updating anime",
      anime: updatedAnime,
    });
  } catch (error) {
    console.log(error);
  }
});

// delete anime

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await Anime.findByIdAndDelete(id);

    res.status(200).json({
      message: "anime remove",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
