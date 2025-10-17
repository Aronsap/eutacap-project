// src/sections/HomeIntro.tsx
import React from "react";
// было: import { homeIntro } from "../content/offer";
import { homeIntro } from "../content/home";

export default function HomeIntro() {
  return (
    <section className="home-intro">
      <div className="container">
        <p className="intro-lead">{homeIntro.lead}</p>

        {homeIntro.paragraphs?.map((p: string, i: number) => (
          <p key={i} className="intro-text">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
