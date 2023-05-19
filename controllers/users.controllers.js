import { request, response } from "express";

export const getUsers = (req = request, res = response) => {
  //obtener query params
  const params = request.query;

  res.status(200).json({
    ok: true,
    msg: "get API",
  });
};

export const createUser = (req = request, res = response) => {
  const body = req.body;

  res.status(201).json({
    ok: true,
    msg: body,
  });
};

export const updateUser = (req = request, res = response) => {
  //segment params
  const { id } = req.params;
  res.json({
    ok: true,
    msg: "put API",
  });
};

export const deleteUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "delete API",
  });
};

export const partialUpdateUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "patch API",
  });
};
