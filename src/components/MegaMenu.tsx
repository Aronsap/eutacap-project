import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./MegaMenu.css";

/** Унифицированные типы для внутренней работы */
type LinkItem = { label: string; to?: string };
type Column = { heading?: string; links: LinkItem[] };
type NormalizedData = { sidebar: string[]; content: Record<string, Column[]> };

/** Вариант 1: «мой» формат */
type DataFormatProps = {
  label: string;
  triggerClass?: string;
  data: NormalizedData;
  activeKey?: string;
};

/** Вариант 2: «твой» формат из Header.tsx */
type LegacyFormatProps = {
  label: string;
  triggerClass?: string;
  sidebar: string[];
  panels: {
    title: string;
    columns: { items: { label: string; to: string }[] }[];
  }[];
  activeKey?: string;
};

type MegaMenuProps = DataFormatProps | LegacyFormatProps;

/** Нормализация данных под единый формат */
function normalizeProps(props: MegaMenuProps): {
  label: string;
  triggerClass?: string;
  data: NormalizedData;
  activeKey?: string;
} {
  if ("data" in props) {
    // Уже нормальный формат
    return {
      label: props.label,
      triggerClass: props.triggerClass,
      data: props.data,
      activeKey: props.activeKey,
    };
  }

  // Legacy: sidebar + panels
  const sidebar = props.sidebar ?? [];
  const panels = props.panels ?? [];

  const content: Record<string, Column[]> = {};
  const keys: string[] = [];

  for (let i = 0; i < Math.max(sidebar.length, panels.length); i++) {
    const key = sidebar[i] ?? panels[i]?.title ?? `Group ${i + 1}`;
    keys.push(key);

    const panel = panels[i];
    const cols: Column[] =
      panel?.columns?.map((c) => ({
        // В «legacy» нет заголовков колонок, только списки
        links: (c.items ?? []).map((it) => ({ label: it.label, to: it.to })),
      })) ?? [];

    content[key] = cols;
  }

  return {
    label: props.label,
    triggerClass: props.triggerClass,
    activeKey: props.activeKey,
    data: { sidebar: keys, content },
  };
}

export default function MegaMenu(rawProps: MegaMenuProps) {
  const { label, triggerClass, data, activeKey } = normalizeProps(rawProps);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(activeKey || data.sidebar[0]);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const cols = useMemo<Column[]>(
    () => data.content[active] || [],
    [data.content, active]
  );

  const openMenu = useCallback(() => setOpen(true), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  // Позиционирование панели (fixed к вьюпорту, БЕЗ scrollY/scrollX)
  const positionPanel = useCallback(() => {
    if (!triggerRef.current || !panelRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const panel = panelRef.current;

    let top = rect.bottom + 8;
    let left = rect.left;

    const viewportW = window.innerWidth;
    const panelW = panel.offsetWidth || 920;
    if (left + panelW > viewportW - 8) {
      left = Math.max(8, viewportW - 8 - panelW);
    }

    const maxH = Math.max(240, window.innerHeight - 24);
    panel.style.maxHeight = `${maxH}px`;
    panel.style.overflow = "auto";

    panel.style.position = "fixed";
    panel.style.top = `${top}px`;
    panel.style.left = `${left}px`;

    // Стрелочка
    const arrow = panel.querySelector<HTMLElement>(".mm-arrow");
    if (arrow) {
      const panelRect = panel.getBoundingClientRect();
      const triggerCenter = rect.left + rect.width / 2;
      const arrowLeft = Math.min(
        Math.max(panelRect.left + 16, triggerCenter),
        panelRect.right - 16
      );
      arrow.style.left = `${arrowLeft - panelRect.left}px`;
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    positionPanel();

    const onResize = () => positionPanel();
    const onScroll = () => positionPanel();

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open, positionPanel]);

  // Клик вне / Esc — закрыть
  useEffect(() => {
    if (!open) return;

    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(t) &&
        triggerRef.current &&
        !triggerRef.current.contains(t)
      ) {
        closeMenu();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeMenu]);

  // Hover-задержка
  const hoverTimeout = useRef<number | null>(null);
  const onEnter = () => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    openMenu();
  };
  const onLeave = () => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => closeMenu(), 120);
  };

  return (
    <div className="mm-group" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        ref={triggerRef}
        type="button"
        className={`mm-trigger nav-link${triggerClass ? " " + triggerClass : ""}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => (open ? closeMenu() : openMenu())}
      >
        {label}
        <span className="mm-caret">▾</span>
      </button>

      {open && (
        <div
          ref={panelRef}
          className="mm-panel"
          role="menu"
          aria-label={label}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div className="mm-arrow" />
          <div className="mm-rowshell">
            {/* Sidebar */}
            <aside className="mm-sidebar">
              {data.sidebar.map((name) => (
                <button
                  key={name}
                  type="button"
                  className={`mm-sideitem ${name === active ? "is-active" : ""}`}
                  onMouseEnter={() => setActive(name)}
                  onFocus={() => setActive(name)}
                >
                  {name}
                  <span className="mm-sidearrow">→</span>
                </button>
              ))}
            </aside>

            {/* Content */}
            <section className="mm-content">
              <div className="mm-content-title">
                {active} <span className="mm-titlearrow">→</span>
              </div>
              <div className="mm-grid">
                {cols.map((col, idx) => (
                  <div className="mm-col" key={idx}>
                    {col.heading && <div className="mm-heading">{col.heading}</div>}
                    <ul className="mm-list">
                      {col.links.map((l, i) => (
                        <li key={i}>
                          <a className="mm-link" href={l.to || "#"} onClick={closeMenu}>
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
