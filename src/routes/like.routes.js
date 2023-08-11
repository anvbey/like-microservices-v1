import express from "express";
import {
  storeLikeEvent,
  checkUserLikedContent,
  getTotalLikesForContent,
} from "../controllers/like.controller.js";

export const router = express.Router();

router.post("/", storeLikeEvent);
router.get("/check", checkUserLikedContent);
router.get("/count", getTotalLikesForContent);

export default router;