import "./Sidebar.css";
import logo from "../assets/logo-sid.png"
import sv1 from "../assets/sv1.svg?react"
import sv2 from "../assets/sv2.svg?react"
import sv3 from "../assets/sv3.svg?react"
import sv4 from "../assets/sv4p.svg?react"
import sv5 from "../assets/sv6.svg?react"
import sv6 from "../assets/svc.svg?react"
import sv7 from "../assets/sv5.svg?react"

const NAV_ITEMS = [
  { id: "overview",      label: "Overview",      icon: sv1 },
  { id: "reservations",  label: "Reservations",  icon: sv2, badge: 5 },
  { id: "calendar",      label: "Calendar",      icon: sv3 },
  { id: "properties",    label: "Properties",    icon: sv4 },
];

const INTEGRATION_ITEMS = [
  { id: "reviews",   label: "Reviews",   icon: sv5 },
  { id: "cleaning",  label: "Cleaning",  icon: sv6 },
];

const FINANCE_ITEMS = [
  { id: "financials", label: "Financials", icon: sv7 },
];

function NavGroup({ title, items, activePage, onNavigate }) {
  return (
    <div className="nav-group">
      {title && <p className="nav-group-label">{title}</p>}
      {items.map((item) => {
  const Icon = item.icon;

  return (
    <button
      key={item.id}
      className={`nav-item ${activePage === item.id ? "active" : ""}`}
      onClick={() => onNavigate(item.id)}
    >
      <Icon className="nav-icon" />

      <span className="nav-label">{item.label}</span>

      {item.badge && (
        <span className="nav-badge">{item.badge}</span>
      )}
    </button>
  );
})}
    </div>
  );
}

export default function Sidebar({ isOpen, onClose, activePage, onNavigate }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="" />
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <NavGroup title="MAIN" items={NAV_ITEMS} activePage={activePage} onNavigate={onNavigate} />
        <NavGroup title="INTEGRATIONS" items={INTEGRATION_ITEMS} activePage={activePage} onNavigate={onNavigate} />
        <NavGroup title="FINANCE" items={FINANCE_ITEMS} activePage={activePage} onNavigate={onNavigate} />
      </nav>

      {/* User footer */}
      <div className="sidebar-footer">
        <div className="user-avatar">AH</div>
        <div className="user-info">
          <p className="user-name">Ahmed Hassan</p>
          <p className="user-role">Property Manager</p>
        </div>
        <button className="user-settings" aria-label="Settings">⚙</button>
      </div>
    </aside>
  );
}
