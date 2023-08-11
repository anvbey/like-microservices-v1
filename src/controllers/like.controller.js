import { getLikeCount, checkLike, storeLike } from "../services/like.service.js";
import { z } from "zod";

const storeLikeEventSchema = z.object({
  user_id: z.string(),
  content_id: z.string(),
});

const checkUserLikedContentSchema = z.object({
  user_id: z.string(),
  content_id: z.string(),
});

const getTotalLikesForContentSchema = z.object({
  content_id: z.string(),
});

export const storeLikeEvent = async (req, res) => {
  try {
    const { user_id, content_id } = storeLikeEventSchema.parse(req.body);
    await storeLike(user_id, content_id);
    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.error("Error while storing the like:", error);
    if (error instanceof z.ZodError)
      return res.status(400).json({ error: "Invalid Data" });
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};

export const checkUserLikedContent = async (req, res) => {
  try {
    const { user_id, content_id } = checkUserLikedContentSchema.parse(req.body);
    const liked = await checkLike(user_id, content_id);
    res.json({ liked });
  } catch (error) {
    console.error("Error while storing the like:", error);
    if (error instanceof z.ZodError)
      return res.status(400).json({ error: "Invalid Data" });
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};

export const getTotalLikesForContent = async (req, res) => {
  try {
    const { content_id } = getTotalLikesForContentSchema.parse(req.body);
    const count = await getLikeCount(content_id);
    res.json({ count });
  } catch (error) {
    console.error("Error while storing the like:", error);
    if (error instanceof z.ZodError)
      return res.status(400).json({ error: "Invalid Data" });
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
};
