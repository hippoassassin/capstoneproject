const Dino = require("../models/Dino");
const {
  verifyToken,
  verifyTokenAndAuthorizaton,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newDino = new Dino(req.body);
  try {
    const savedDino = await newDino.save();
    res.status(200).json(savedDino);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedDino = await Dino.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedDino);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Dino.findByIdAndDelete(req.params.id);
    res.status(200).json("Dino has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET DINOS BY ID
router.get("/find/:id", async (req, res) => {
  try {
    const dino = await Dino.findById(req.params.id);
    res.status(200).json(dino);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET All USERS with 5 newest query
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qType = req.query.type;
  try {
    let dinos;
    if (qNew) {
      dinos = await Dino.find().sort({ createdAt: -1 }).limit(5);
    } else if (qType) {
      dinos = await Dino.find({
        type: {
          $in: [qType],
        },
      });
    } else {
      dinos = await Dino.find();
    }

    res.status(200).json(dinos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
