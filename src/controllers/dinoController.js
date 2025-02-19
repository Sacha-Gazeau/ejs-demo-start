import { dinosaurs, navItems } from "../data/data.js";

export const index = (req, res) => {
  res.render("dinosaurs/dinosaurs", {
    navItems,
    dinosaurs,
  });
};

export const details = (req, res) => {
  res.render("dinosaurs/dinosaurs", {
    navItems,
    dinosaurs,
  });
};
