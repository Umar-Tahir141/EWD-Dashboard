import { useState, useEffect } from "react";
import "./BookingChannelChart.css";

const SIZE   = 160;
const STROKE = 22;
const R      = (SIZE - STROKE) / 2;
const CIRC   = 2 * Math.PI * R;
const CX = SIZE / 2,
      CY = SIZE / 2;

export default function BookingChannelChart({ channels }) {
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(t);
  }, []);

  const total = channels.reduce((s, c) => s + c.value, 0);

  // Build arc segments
  let cumulPercent = 0;
  const segments = channels.map((ch) => {
    const pct    = ch.value / total;
    const offset = CIRC * (1 - cumulPercent);
    const dash   = animated ? CIRC * pct : 0;
    const gap    = CIRC - dash;
    cumulPercent += pct;
    return { ...ch, offset, dash, gap };
  });

  const displayTotal = channels.reduce((s, c) => s + c.count, 0);
  const activeChannel = hovered !== null ? channels[hovered] : null;

  return (
    <div className="booking-chart-card">
      <div className="booking-chart-header">
        <h3 className="chart-title">Bookings by channel</h3>
        <select className="period-select">
          <option>This month</option>
          <option>Last month</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="booking-chart-body">
        {/* Donut */}
        <div className="donut-wrapper">
          <svg
            width={SIZE} height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="donut-svg"
          >
            {/* Track */}
            <circle
              cx={CX} cy={CY} r={R}
              fill="none"
              stroke="#F0F2F5"
              strokeWidth={STROKE}
            />
            {/* Segments */}
            {segments.map((seg, i) => (
              <circle
                key={i}
                cx={CX} cy={CY} r={R}
                fill="none"
                stroke={seg.color}
                strokeWidth={hovered === i ? STROKE + 3 : STROKE}
                strokeDasharray={`${seg.dash} ${seg.gap}`}
                strokeDashoffset={seg.offset}
                strokeLinecap="butt"
                style={{
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                  transition: `stroke-dasharray 1s cubic-bezier(.4,0,.2,1) ${i * 0.15}s, stroke-width 0.2s ease`,
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            ))}
            {/* Center text */}
            <text x={CX} y={CY - 8}  textAnchor="middle" fontSize="22" fontWeight="700" fill="#1A1D2E">
              {activeChannel ? activeChannel.value + "%" : displayTotal}
            </text>
            <text x={CX} y={CY + 12} textAnchor="middle" fontSize="10" fill="#9EA5B5">
              {activeChannel ? activeChannel.name : "Total"}
            </text>
          </svg>
        </div>

        {/* Legend */}
        <ul className="channel-legend">
          {channels.map((ch, i) => (
            <li
              key={i}
              className={`channel-item ${hovered === i ? "active" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="channel-dot" style={{ background: ch.color }} />
              <span className="channel-name">{ch.name}</span>
              <span className="channel-pct">{ch.value}%</span>
              <span className="channel-count">({ch.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
