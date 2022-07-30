import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000";

Cypress.Commands.add("resetRecommendations", () => {
  cy.request("POST", "http://localhost:5000/recommendations/reset");
});

Cypress.Commands.add("createRecommendation", (recommendation) => {
  cy.visit(`${URL}/`);
  cy.get("#name").type(recommendation.name);
  cy.get("#url").type(recommendation.youtubeLink);

  cy.intercept("POST", "/recommendations").as("postRecommendation");
  cy.get("#submit").click();
  cy.wait("@postRecommendation");
});