import "./ActivityActions.css";
import bt1 from "../assets/bt1.png"
import bt2 from "../assets/bt2.png"
import bt3 from "../assets/bt3.png"
import bt4 from "../assets/bt4.png"


/* ---- Recent Activity Feed ---- */
const TABS = ["All", "Bookings", "Cleaning", "Reviews"];

export function RecentActivity({ activities }) {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h3 className="chart-title">Recent activity</h3>
        <div className="activity-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`activity-tab ${i === 0 ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ul className="activity-list">
        {activities.map((item) => (
          <li key={item.id} className="activity-item">
  <div className="activity-marker">
    <span
      className="activity-dot"
      style={{ background: item.color }}
    ></span>
  </div>

  <div className="activity-content">
    <p className="activity-text">{item.text}</p>
  </div>

  <span className="activity-time">
    {item.time}
  </span>
</li>
        ))}
      </ul>

      <button className="view-all-activity">View all activity →</button>
    </div>
  );
}

/* ---- Quick Actions ---- */
const QUICK_ACTIONS = [
  { label: "Add reservation", icon: bt1, color: "#135B42", bg: "#D4F4E5" },
  { label: "Add property",    icon: bt2, color: "#004E90", bg: "#D4EBFF" },
  { label: "Schedule cleaning", icon: bt3, color: "#794819", bg: "#FDE4BB" },
  { label: "Message guest",  icon: bt4, color: "#49379F", bg: "#E0E1FF" },
];

export function QuickActions() {
  return (
    <div className="quick-actions-card">
      <h3 className="chart-title">Quick actions</h3>
      <div className="quick-actions-grid">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action.label}
            className="quick-action-btn"
            style={{ "--action-color": action.color, "--action-bg": action.bg }}
          >
            <span
  className="qa-icon"
  style={{ background: action.bg }}
>
  <img
    src={action.icon}
    alt={action.label}
    className="qa-icon-img"
  />
</span>
            <span className="qa-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
