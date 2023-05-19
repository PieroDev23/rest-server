import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  partialUpdateUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/", getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/", deleteUser);

router.patch("/", partialUpdateUser);

export default router;
