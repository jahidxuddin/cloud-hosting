import { Router } from "express";
import { createUser } from "../service/userService";
import z from "zod";
import JwtService from "../service/jwtService";

const authRouter = Router();

const jwtService = new JwtService();

const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

const registerBodySchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

authRouter.get("/login", (req, res) => {
  const { email, password } = req.body;
  loginBodySchema.safeParse({
    email,
    password,
  });

  const token = jwtService.generateToken(email);

  res.status(201).json({
    status: 201,
    message: `User with email '${email}' successfully created.`,
    token,
  });  
});

authRouter.get("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  registerBodySchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });

  try {
    await createUser({
      firstName,
      lastName,
      email,
      password,
    });

    const token = jwtService.generateToken(email);

    res.status(201).json({
      status: 201,
      message: `User with email '${email}' successfully created.`,
      token,
    });
  } catch (err) {
    res.status(500).json({
      staus: 500,
      message: err.message,
    });
  }
});

export default authRouter;
