import { useState } from "react";
import "./RevenueChart.css";

const SAMPLE_DATA = [
  { month: "Jan", revenue: 2050, target: 3200 },
  { month: "Feb", revenue: 2800, target: 3200 },
  { month: "Mar", revenue: 2300, target: 3200 },
  { month: "Apr", revenue: 3050, target: 3200 },
  { month: "May", revenue: 2650, target: 3200 },
  { month: "Jun", revenue: 3340, target: 3200 },
];

export default function RevenueChart({ data = SAMPLE_DATA }) {
  const [period, setPeriod] = useState("6 months");

  const total = data.reduce((s, d) => s + d.revenue, 0);
  const bestIdx = data.reduce((bi, d, i, arr) => d.revenue > arr[bi].revenue ? i : bi, 0);

  const W = 560;
  const H = 200;
  const PAD = { top: 16, right: 12, bottom: 32, left: 40 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const maxVal = Math.ceil(Math.max(...data.map(d => Math.max(d.revenue, d.target))) / 1000) * 1000 + 400;

  const n = data.length;
  const barW = Math.round(innerW / n * 0.42);
  const slotW = innerW / n;
  const barX = i => PAD.left + i * slotW + (slotW - barW) / 2;
  const toY  = v => PAD.top + innerH - (v / maxVal) * innerH;

  const yMax = Math.ceil(maxVal / 1000) * 1000;
  const yTicks = Array.from({ length: Math.round(yMax / 1000) + 1 }, (_, i) => i * 1000).filter(v => v <= yMax);

  const tgtY = toY(data[0]?.target ?? 0);

  return (
    <div className="rc-card">

      {/* ── Header ── */}
      <div className="rc-header">
        <div className="rc-header-left">
          <p className="rc-title">Revenue overview</p>
          <p className="rc-sub">Last {period}</p>
        </div>
        <div className="rc-header-right">
          <div className="rc-legend">
            <span className="rc-dot" />
            <span className="rc-legend-label">Revenue</span>
            <span className="rc-dash" />
            <span className="rc-legend-label">Target</span>
          </div>
          <select
            className="rc-select"
            value={period}
            onChange={e => setPeriod(e.target.value)}
          >
            <option>3 months</option>
            <option>6 months</option>
            <option>12 months</option>
          </select>
        </div>
      </div>

      {/* ── Chart ── */}
      <div className="rc-chart-wrap">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="xMidYMid meet"
          className="rc-svg"
          aria-label="Bar chart of monthly revenue vs target"
        >
          {/* Grid + Y labels */}
          {yTicks.map(tick => {
            const y = toY(tick);
            return (
              <g key={tick}>
                <line
                  x1={PAD.left} y1={y}
                  x2={W - PAD.right} y2={y}
                  stroke="#E8EBF0" strokeWidth="1"
                />
                <text
                  x={PAD.left - 6} y={y + 4}
                  textAnchor="end" fontSize="9" fill="#9EA5B5"
                >
                  {tick === 0 ? "$0" : `$${tick / 1000}k`}
                </text>
              </g>
            );
          })}

          {/* Target dashed line */}
          <line
            x1={PAD.left} y1={tgtY}
            x2={W - PAD.right} y2={tgtY}
            stroke="#F87171" strokeWidth="1.5" strokeDasharray="5,4"
          />

          {/* Bars */}
          {data.map((d, i) => {
            const x   = barX(i);
            const y   = toY(d.revenue);
            const bh  = innerH - (y - PAD.top);
            const r   = 4;
            const col = i === bestIdx ? "#14b8a6" : "#1a2744";
            return (
              <g key={i}>
                {/* Rounded top, square bottom */}
                <path
                  d={`
                    M${x + r},${y}
                    h${barW - r * 2}
                    a${r},${r} 0 0 1 ${r},${r}
                    v${bh - r}
                    h${-barW}
                    v${-(bh - r)}
                    a${r},${r} 0 0 1 ${r},${-r}
                    Z
                  `}
                  fill={col}
                />
                {/* X label */}
                <text
                  x={x + barW / 2}
                  y={H - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#9EA5B5"
                >
                  {d.month}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ── Footer ── */}
      <div className="rc-footer">
        <span>Total: <strong>${total.toLocaleString()}</strong></span>
        <span>Best month: <strong>{data[bestIdx].month}</strong></span>
      </div>
    </div>
  );
}