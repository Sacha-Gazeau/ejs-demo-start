import { dinosaurs } from "../data/data.js";

export const contact = (req, res) => {
  res.render("pages/dinosaurs", {
    dinosaurs,
  });
};
