import { useEffect, useState } from "react";
import "./CleaningOccupancy.css";

const STATUS_CONFIG = {
  "clean":          { label: "Clean",          color: "#10B981", bg: "#ECFDF5", border: "#10B981" },
  "in-progress":    { label: "In Progress",    color: "#F59E0B", bg: "#FFFBEB", border: "#92400E" },
  "needs-cleaning": { label: "Needs Cleaning", color: "#EF4444", bg: "#FEF2F2", border: "#EF4444" },
  "occupied":       { label: "Occupied",       color: "#6C63FF", bg: "#EEF0FF", border: "#6C63FF" },
};

function CleaningItem({ item }) {
  const cfg = STATUS_CONFIG[item.status] || STATUS_CONFIG["clean"];
  return (
    <div className="ci-item" style={{ borderLeftColor: cfg.border }}>
      <div className="ci-top">
        <span className="ci-property">{item.property}</span>
        <span className="ci-badge" style={{ background: cfg.bg, color: cfg.color }}>
          {item.statusLabel}
        </span>
      </div>
      <p className="ci-meta">{item.lastCleaned}</p>
      <p className="ci-meta">Cleaner: {item.cleaner}</p>
    </div>
  );
}

export function CleaningStatusCard({ items = [] }) {
  const clean    = items.filter(i => i.status === "clean").length;
  const inProg   = items.filter(i => i.status === "in-progress").length;
  const needsCln = items.filter(i => i.status === "needs-cleaning").length;

  return (
    <div className="cleaning-card">
      <div className="cleaning-header">
        <h3 className="chart-title">Cleaning status</h3>
        <button className="view-all-btn">Manage all →</button>
      </div>

      <div className="ci-row">
        {items.map(item => (
          <CleaningItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cleaning-summary">
        <span className="cleaning-summary-item cleaning-summary-item--clean">{clean} clean</span>
        <span className="cleaning-dot-sep">·</span>
        <span className="cleaning-summary-item cleaning-summary-item--progress">{inProg} in progress</span>
        <span className="cleaning-dot-sep">·</span>
        <span className="cleaning-summary-item cleaning-summary-item--needs">{needsCln} needs attention</span>
      </div>
    </div>
  );
}

/* ─── Occupancy Rate Card ───────────────────── */
const GAUGE_SIZE   = 130;
const GAUGE_STROKE = 14;
const GAUGE_R      = (GAUGE_SIZE - GAUGE_STROKE) / 2;
const GAUGE_CIRC   = 2 * Math.PI * GAUGE_R;

export function OccupancyRateCard({ rate = 80, accepted = 8, available = 2 }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(t);
  }, []);

  const dash = animated ? GAUGE_CIRC * (rate / 100) : 0;
  const gap  = GAUGE_CIRC - dash;

  return (
    <div className="occupancy-card">
      <div className="occupancy-header">
        <h3 className="chart-title">Occupancy rate</h3>
        <span className="occupancy-period">This month</span>
      </div>

      <div className="occupancy-gauge-wrapper">
        <svg
          width={GAUGE_SIZE} height={GAUGE_SIZE}
          viewBox={`0 0 ${GAUGE_SIZE} ${GAUGE_SIZE}`}
          className="occupancy-svg"
        >
          <circle cx={GAUGE_SIZE/2} cy={GAUGE_SIZE/2} r={GAUGE_R}
            fill="none" stroke="#F0F2F5" strokeWidth={GAUGE_STROKE} />
          <circle cx={GAUGE_SIZE/2} cy={GAUGE_SIZE/2} r={GAUGE_R}
            fill="none" stroke="#14b8a6" strokeWidth={GAUGE_STROKE}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={GAUGE_CIRC / 4}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 1.2s cubic-bezier(.4,0,.2,1) 0.4s" }}
          />
          <text x={GAUGE_SIZE/2} y={GAUGE_SIZE/2 - 6}
            textAnchor="middle" fontSize="20" fontWeight="700" fill="#1A1D2E">
            {rate}%
          </text>
          <text x={GAUGE_SIZE/2} y={GAUGE_SIZE/2 + 12}
            textAnchor="middle" fontSize="9" fill="#9EA5B5" letterSpacing="0.5">
            OCCUPIED
          </text>
        </svg>
      </div>

      <div className="occupancy-stats">
        <div className="occupancy-stat">
          <span className="occ-stat-val">{accepted} occupied</span>
          <span className="occ-stat-label">{available} available</span>
        </div>
      </div>
    </div>
  );
}