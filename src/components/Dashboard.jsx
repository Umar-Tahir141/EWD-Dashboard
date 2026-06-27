import { useState } from "react";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import BookingChannelChart from "./BookingChannelChart";
import GuestTable from "./GuestTable";
import { CleaningStatusCard, OccupancyRateCard } from "./CleaningOccupancy";
import { RecentActivity, QuickActions } from "./ActivityActions";
import {
  statsData, revenueData, bookingChannels,
  arrivalsToday, departuresToday, cleaningStatus,
  recentActivity, occupancyRate
} from "../mockdata";
import "./Dashboard.css";
import svgb from "../assets/svgb.svg"
import svgn from"../assets/svgn.svg"

function TopBar({ onMenuOpen }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="hamburger" onClick={onMenuOpen} aria-label="Open menu">
          <span /><span /><span />
        </button>
        <div className="topbar-greeting">
          <h1 className="greeting-text">
            Good morning, Ahmed 👋
          </h1>
          <p className="greeting-date">{dateStr} · 3 properties active</p>
        </div>
      </div>
      <div className="topbar-right">
        <div className="search-bar">
          <img src={svgb} alt="" />
          <input
            type="text"
            placeholder="Search reservations, guests..."
            className="search-input"
          />
        </div>
        <button className="notif-btn" aria-label="Notifications">
          <img src={svgn} alt="" />
          <span className="notif-dot" />
        </button>
        <select className="lang-select">
          <option>EN</option>
          <option>AR</option>
        </select>
         <div className="user-avatar2">AH</div>
      </div>
    </header>
  );
}

function DemoBanner({ onDismiss }) {
  return (
    <div className="demo-banner">
      <span className="demo-label">DEMO MODE</span>
      <p className="demo-text">
        You're viewing sample data. Connect your first property to see real stats and start managing your rentals.
      </p>
      <button className="demo-cta">Connect property →</button>
      <button className="demo-dismiss" onClick={onDismiss} aria-label="Dismiss">✕</button>
    </div>
  );
}

export default function Dashboard({ onMenuOpen }) {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="dashboard">
      <TopBar onMenuOpen={onMenuOpen} />

      <div className="dashboard-content">
        {showBanner && (
          <DemoBanner onDismiss={() => setShowBanner(false)} />
        )}

        {/* ---- Stat Cards Row ---- */}
        <section className="stats-grid">
          {statsData.map((stat, i) => (
            <StatCard key={stat.id} data={stat} animDelay={i * 60} />
          ))}
        </section>

        {/* ---- Charts Row ---- */}
        <section className="charts-row">
          <div className="chart-main">
            <RevenueChart data={revenueData} />
          </div>
          <div className="chart-side">
            <BookingChannelChart channels={bookingChannels} />
          </div>
        </section>

        {/* ---- Arrivals / Departures ---- */}
        <section className="tables-row">
          <GuestTable
            title="Arrivals today"
            guests={arrivalsToday}
            countColor="#0F1C2F"
            countBg="#50D6BC"
          />
          <GuestTable
            title="Departures today"
            guests={departuresToday}
            countColor="#ffffff"
            countBg="#FD6E55"
          />
        </section>

        {/* ---- Cleaning + Occupancy ---- */}
        <section className="cleaning-row">
          <div className="cleaning-main">
            <CleaningStatusCard items={cleaningStatus} />
          </div>
          <div className="cleaning-side">
            <OccupancyRateCard rate={occupancyRate} accepted={8} available={1} />
          </div>
        </section>

        {/* ---- Activity + Quick Actions ---- */}
        <section className="bottom-row">
          <div className="activity-main">
            <RecentActivity activities={recentActivity} />
          </div>
          <div className="activity-side">
            <QuickActions />
          </div>
        </section>
      </div>
    </div>
  );
}
