import express from "express";
import { getFormStructure } from "../usecases/get-form-structure";
import { FormTypes } from "../form-fields-rules";
import { createFormEntry } from "../usecases/create-form-entry";

const formsRouter = express.Router();

formsRouter.get("/:formType", (req, res) => {
  const { formType } = req.params;

  const result = getFormStructure(formType as FormTypes);

  if (result.Err) {
    res.status(400).json({ errors: result.Err });
  } else {
    res.status(200).json({ data: result.Ok });
  }
});

formsRouter.post("/", (req, res) => {
  const formData = req.body as Record<string, unknown>;

  createFormEntry(formData)
    .then((result) => {
      if (result.Err) {
        res.status(400).json({ errors: result.Err });
      } else {
        res.status(200).json({ data: result.Ok });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error ocurred!");
    });
});

export default formsRouter;
