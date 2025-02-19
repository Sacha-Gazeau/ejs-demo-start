import { person, navItems } from "../data/data.js";

export const home = (req, res) => {
  res.render("pages/home", {
    navItems,
    title: "Dinosaurs are awesome !",
    content: "Welcome to the world of dinosaurs",
  });
};
export const about = (req, res) => {
  res.render("pages/default", {
    navItems,
    title: "About us",
    content: "This is a page about dinosaurs",
    team: [
      "T-rex",
      "Velociraptor",
      "Stegasaurus",
      "<strong>Premium</strong> Diplodocus",
    ],
  });
};

export const contact = (req, res) => {
  res.render("pages/contact", {
    navItems,
    title: "Contact",
    content: "Contact us at 09 233 40 89",
    person,
  });
};
export const privacy = (req, res) => {
  res.render("pages/default", {
    navItems,
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy",
    team: false,
  });
};
