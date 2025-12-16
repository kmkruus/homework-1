// ADD a post
router.post("/", async (req, res) => {
  try {
    const { body } = req.body;

    if (!body) {
      return res.status(400).json({ message: "Post body required" });
    }

    await pool.query(
      "INSERT INTO posts (body, likecount) VALUES ($1, 0)",
      [body]
    );

    res.status(201).json({ message: "Post added" });
  } catch (err) {
    res.status(500).json(err);
  }
});
