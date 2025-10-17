import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import MegaMenu from "./MegaMenu";

type Props = {
  isAuthenticated: boolean;
  onLogout: () => void;
  onOpenAuth?: (mode: "login" | "register") => void; // опционально, ничего не ломает
};

const Header: React.FC<Props> = ({ isAuthenticated, onLogout, onOpenAuth }) => {
  return (
    <header className="uc-header">
      <div className="uc-header__inner">
        <Link to="/" className="uc-logo">UTACAPT</Link>

        <nav className="uc-nav">
          {/* SERVICES: ТЕПЕРЬ КАК INDUSTRIES (сайдбар + панели) */}
          <MegaMenu
            label="Services"
            triggerClass="uc-nav__link uc-nav__link--static"
            sidebar={[
              "Generative AI",
              "Engineering",
              "Consulting",
              "Integrations",
              "LLMs & Agents",
              "Data",
            ]}
            panels={[
              {
                title: "Generative AI",
                columns: [
                  {
                    items: [
                      { label: "Gen AI POC Development", to: "#" },
                      { label: "AI Development", to: "#" },
                      { label: "Data Engineering", to: "#" },
                    ],
                  },
                  {
                    items: [
                      { label: "Generative AI Development", to: "#" },
                      { label: "Generative AI Integration", to: "#" },
                      { label: "Hire Prompt Engineers", to: "#" },
                    ],
                  },
                  {
                    items: [
                      { label: "Generative AI Consulting", to: "#" },
                      { label: "ChatGPT Integration Services", to: "#" },
                      { label: "ChatGPT Developers", to: "#" },
                    ],
                  },
                ],
              },
              {
                title: "Engineering",
                columns: [{ items: [] }, { items: [] }, { items: [] }],
              },
              {
                title: "Consulting",
                columns: [{ items: [] }, { items: [] }, { items: [] }],
              },
              {
                title: "Integrations",
                columns: [{ items: [] }, { items: [] }, { items: [] }],
              },
              {
                title: "LLMs & Agents",
                columns: [
                  {
                    items: [
                      { label: "AI Agent Development", to: "#" },
                      { label: "LLM Development", to: "#" },
                    ],
                  },
                  { items: [] },
                  { items: [] },
                ],
              },
              {
                title: "Data",
                columns: [
                  {
                    items: [
                      { label: "Adaptive AI Development", to: "#" },
                    ],
                  },
                  { items: [] },
                  { items: [] },
                ],
              },
            ]}
          />

          {/* ========= INDUSTRIES: НЕ МЕНЯЛ — как у тебя было ========= */}
          <MegaMenu
            label="Industries"
            triggerClass="uc-nav__link uc-nav__link--static"
            sidebar={[
              "Healthcare","Insurance","Construction","Manufacturing",
              "Retail","Fintech","SaaS","Travel","Fitness"
            ]}
            panels={[
              {
                title: "Healthcare AI Solutions",
                columns: [
                  { items: [
                    { label: "Accelerated Drug Discovery", to: "/industries/healthcare/drug-discovery" },
                    { label: "Clinical Decision Support",   to: "/industries/healthcare/cds" },
                    { label: "Custom Healthcare Solutions", to: "/industries/healthcare/custom" },
                    { label: "Documentation Intelligence",  to: "/industries/healthcare/doc-intel" },
                    { label: "Healthcare Fraud Detection",  to: "/industries/healthcare/fraud" },
                    { label: "Healthcare AI Agent",         to: "/industries/healthcare/ai-agent" },
                  ]},
                  { items: [
                    { label: "Medical Claims Processing",       to: "/industries/healthcare/claims" },
                    { label: "Medical Imaging Intelligence",    to: "/industries/healthcare/imaging" },
                    { label: "Medical Research Support",        to: "/industries/healthcare/research" },
                    { label: "Patient Data Analytics",          to: "/industries/healthcare/analytics" },
                    { label: "Personalized Medicine Platforms", to: "/industries/healthcare/pmp" },
                  ]},
                  { items: [
                    { label: "Personalized Treatment",           to: "/industries/healthcare/personalized" },
                    { label: "Predictive Diagnosis/Forecasting", to: "/industries/healthcare/predictive" },
                    { label: "Remote Patient Monitoring",        to: "/industries/healthcare/rpm" },
                    { label: "Virtual Health Assistants",        to: "/industries/healthcare/vha" },
                    { label: "Workforce Optimization",           to: "/industries/healthcare/workforce" },
                  ]},
                ],
              },
              {
                title: "Insurance",
                columns: [
                  { items: [
                    { label: "Claims Automation",    to: "/industries/insurance/claims-automation" },
                    { label: "Underwriting Assist",  to: "/industries/insurance/underwriting" },
                    { label: "Fraud Analytics",      to: "/industries/insurance/fraud" },
                    { label: "Policy Admin Tools",   to: "/industries/insurance/policy-admin" },
                  ]},
                  { items: [
                    { label: "Agent Copilots",       to: "/industries/insurance/agent-copilot" },
                    { label: "FNOL Triage",          to: "/industries/insurance/fnol" },
                    { label: "Pricing Intelligence", to: "/industries/insurance/pricing" },
                  ]},
                  { items: [
                    { label: "Customer 360",         to: "/industries/insurance/customer360" },
                    { label: "Document Intake",      to: "/industries/insurance/doc-intake" },
                    { label: "Voice of Customer",    to: "/industries/insurance/voc" },
                  ]},
                ],
              },
              {
                title: "Construction",
                columns: [
                  { items: [
                    { label: "Project Risk Scoring",  to: "/industries/construction/risk" },
                    { label: "Bidding Assistant",     to: "/industries/construction/bid" },
                    { label: "Change Order QA",       to: "/industries/construction/change-orders" },
                  ]},
                  { items: [
                    { label: "Incident Analytics",    to: "/industries/construction/incidents" },
                    { label: "Materials Forecasting", to: "/industries/construction/materials" },
                  ]},
                  { items: [
                    { label: "Field Copilot",         to: "/industries/construction/field-copilot" },
                    { label: "Document Control",      to: "/industries/construction/docs" },
                  ]},
                ],
              },
              {
                title: "Manufacturing",
                columns: [
                  { items: [
                    { label: "Predictive Maintenance", to: "/industries/manufacturing/pdm" },
                    { label: "Quality Intelligence",   to: "/industries/manufacturing/quality" },
                    { label: "Yield Optimization",     to: "/industries/manufacturing/yield" },
                  ]},
                  { items: [
                    { label: "Supplier Risk",          to: "/industries/manufacturing/suppliers" },
                    { label: "Inventory Planning",     to: "/industries/manufacturing/inventory" },
                  ]},
                  { items: [
                    { label: "Shopfloor Copilot",      to: "/industries/manufacturing/copilot" },
                    { label: "Document Parsing",       to: "/industries/manufacturing/docs" },
                  ]},
                ],
              },
              {
                title: "Retail",
                columns: [
                  { items: [
                    { label: "Demand Forecasting",  to: "/industries/retail/forecasting" },
                    { label: "Assortment Planning", to: "/industries/retail/assortment" },
                    { label: "Price Optimization",  to: "/industries/retail/pricing" },
                  ]},
                  { items: [
                    { label: "Churn Prevention",     to: "/industries/retail/churn" },
                    { label: "Customer Segments",    to: "/industries/retail/segments" },
                  ]},
                  { items: [
                    { label: "Store Ops Copilot",    to: "/industries/retail/ops-copilot" },
                    { label: "Returns Intelligence", to: "/industries/retail/returns" },
                  ]},
                ],
              },
              {
                title: "Fintech",
                columns: [
                  { items: [
                    { label: "KYC/AML Automation", to: "/industries/fintech/kyc" },
                    { label: "Risk Scoring",       to: "/industries/fintech/risk" },
                    { label: "Credit Decisioning", to: "/industries/fintech/credit" },
                  ]},
                  { items: [
                    { label: "Fraud Detection",     to: "/industries/fintech/fraud" },
                    { label: "Support Copilot",     to: "/industries/fintech/support" },
                  ]},
                  { items: [
                    { label: "Doc Intelligence",    to: "/industries/fintech/docs" },
                    { label: "Lending Assistant",   to: "/industries/fintech/lending" },
                  ]},
                ],
              },
              {
                title: "SaaS",
                columns: [
                  { items: [
                    { label: "AI Support Copilot",  to: "/industries/saas/support" },
                    { label: "Activation Nudges",   to: "/industries/saas/activation" },
                    { label: "Churn Analytics",     to: "/industries/saas/churn" },
                  ]},
                  { items: [
                    { label: "Sales Playbooks",     to: "/industries/saas/sales" },
                    { label: "Billing Analytics",   to: "/industries/saas/billing" },
                  ]},
                  { items: [
                    { label: "Docs Q&A",            to: "/industries/saas/docs" },
                    { label: "Usage Forecasting",   to: "/industries/saas/usage" },
                  ]},
                ],
              },
              {
                title: "Travel",
                columns: [
                  { items: [
                    { label: "Pricing & Revenue",   to: "/industries/travel/revenue" },
                    { label: "Delay Prediction",    to: "/industries/travel/delay" },
                    { label: "Dynamic Offers",      to: "/industries/travel/offers" },
                  ]},
                  { items: [
                    { label: "Service Copilot",     to: "/industries/travel/copilot" },
                    { label: "Loyalty Analytics",   to: "/industries/travel/loyalty" },
                  ]},
                  { items: [
                    { label: "Irregular Ops",       to: "/industries/travel/irops" },
                    { label: "Ancillary Uplift",    to: "/industries/travel/ancillary" },
                  ]},
                ],
              },
              {
                title: "Fitness",
                columns: [
                  { items: [
                    { label: "Member Retention",  to: "/industries/fitness/retention" },
                    { label: "Class Scheduling",  to: "/industries/fitness/schedule" },
                    { label: "Equipment Health",  to: "/industries/fitness/equipment" },
                  ]},
                  { items: [
                    { label: "Sales Assistant",   to: "/industries/fitness/sales" },
                    { label: "Support Copilot",   to: "/industries/fitness/support" },
                  ]},
                  { items: [
                    { label: "Content Reco",      to: "/industries/fitness/content" },
                    { label: "Churn Prediction",  to: "/industries/fitness/churn" },
                  ]},
                ],
              },
            ]}
          />

          {/* Остальные пункты без изменений */}
          <span className="uc-nav__link uc-nav__link--static">Work</span>
          <span className="uc-nav__link uc-nav__link--static">Company</span>
          <span className="uc-nav__link uc-nav__link--static">Blog</span>
          <span className="uc-nav__link uc-nav__link--static">Resources</span>
        </nav>

        <div className="uc-actions">
          {!isAuthenticated ? (
            <>
              {onOpenAuth ? (
                <>
                  <button onClick={() => onOpenAuth("login")} className="uc-btn uc-btn--ghost">
                    Login
                  </button>
                  <button onClick={() => onOpenAuth("register")} className="uc-btn uc-btn--primary">
                    Register
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="uc-btn uc-btn--ghost">Login</Link>
                  <Link to="/register" className="uc-btn uc-btn--primary">Register</Link>
                </>
              )}
            </>
          ) : (
            <>
              <button onClick={onLogout} className="uc-btn uc-btn--ghost">Logout</button>
              <button type="button" className="uc-gear" aria-label="Settings">
                <svg className="uc-gear__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M19.14,12.94a7.43,7.43,0,0,0,.05-.94,7.43,7.43,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7.39,7.39,0,0,0-1.63-.94l-.38-2.65A.5.5,0,0,0,13.82,1H10.18a.5.5,0,0,0-.5.43L9.3,4.08a7.39,7.39,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.64L4.86,11.06a7.43,7.43,0,0,0-.05.94,7.43,7.43,0,0,0,.05.94L2.75,14.59a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7.39,7.39,0,0,0,1.63.94l.38,2.65a.5.5,0,0,0,.5.43h3.64a.5.5,0,0,0,.5-.43l.38-2.65a7.39,7.39,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.64Zm-7.14,2.56A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
