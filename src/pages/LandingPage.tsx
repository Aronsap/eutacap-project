import React from "react";
import HomeIntro from "../sections/HomeIntro";
import OfferGrid from "../sections/OfferGrid";

export default function LandingPage() {
  return (
    <main style={{ padding: "32px" }}>
      <h1>Добро пожаловать в проект!</h1>
      <div style={{ color: "#6b7280" }}>://///////////////////////////:</div>

      {/* Вот здесь пойдут тексты, как мы хотели */}
      <HomeIntro />
      <OfferGrid />
    </main>
  );
}
