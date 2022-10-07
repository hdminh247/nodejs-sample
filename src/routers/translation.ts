import { Router } from "express";

import { getTranslations, updateTranslations } from "../controllers/translation";

const router = Router();

// Get profile
router.route("/").get(getTranslations);
router.route("/").put(updateTranslations);

export default router;
