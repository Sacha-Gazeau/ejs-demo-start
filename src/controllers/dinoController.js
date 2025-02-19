import { dinosaurs, navItems } from "../data/data.js";

export const index = (req, res) => {
  res.render("dinosaurs/index", {
    navItems,
    dinosaurs,
  });
};

export const details = (req, res) => {
  res.render("dinosaurs/details", {
    navItems,
    dinosaurs,
  });
};
