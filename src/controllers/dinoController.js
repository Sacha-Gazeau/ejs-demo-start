import { dinosaurs, navItems } from "../data/data.js";

export const index = (req, res) => {
  res.render("dinosaurs/index", {
    navItems,
    dinosaurs,
  });
};

export const detail = (req, res) => {
  const dino = dinosaurs.find((dino) => dino.slug == req.params.slug);

  if (!dino) {
    res.status(404).render("errors/404", {
      layout: "layouts/error",
      message: "Dinosaur Not Found",
    });
  }

  res.render("dinosaurs/details", {
    title: "Dinosaur Details",
    dino,
    navItems,
  });
};
