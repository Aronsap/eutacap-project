// src/sections/OfferGrid.tsx
import React from "react";
import { offerItems, offerSection } from "../content/offer";

export default function OfferGrid() {
  return (
    <section className="offer-section">
      <div className="container">
        {/* Заголовок секции (как на скрине): eyebrow → h2 → subtitle */}
        <header className="offer-head">
          <div className="offer-eyebrow">{offerSection.eyebrow}</div>
          <h2 className="offer-title">{offerSection.title}</h2>
          <p className="offer-subtitle">{offerSection.subtitle}</p>
        </header>

        {/* Сетка карточек */}
        <div className="offer-grid">
          {offerItems.map((it) => (
            <article key={it.title} className="offer-card">
              <h3 className="offer-card__title">
                <span>{it.title}</span>
                <span className="offer-card__arrow" aria-hidden>→</span>
              </h3>
              <p className="offer-card__text">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
