import "./StatCard.css";
import kp1 from "../assets/kp1.png"
import kp2 from "../assets/kp2.png"
import kp3 from "../assets/kp3.png"
import kp4 from "../assets/kp4.png"
import kp5 from "../assets/kp5.png"
import kp6 from "../assets/kp6.png"

export default function StatCard({ data, animDelay = 0 }) {
  const { label, value, subValue, change, changeType, icon, color, bgColor, isMoneyIcon } = data;

  return (
    <div
      className="stat-card"
      style={{ animationDelay: `${animDelay}ms` }}
    >
      <div className="stat-card-header">
        <div
  className="stat-icon"
  style={{ background: bgColor, color }}
>
  {isMoneyIcon ? (
    <span className="money-icon">$</span>
  ) : (
    <img src={icon} alt={label} className="stat-icon-img" />
  )}
</div>
      </div>

      <div className="stat-value">{value}</div>
      {subValue && <div className="stat-sub-value">{subValue}</div>}
      <div className="stat-label">{label}</div>

      <div className={`stat-change stat-change--${changeType}`}>
        {changeType === "positive" && <span className="change-arrow">↑</span>}
        {changeType === "warning"  && <span className="change-arrow">⚠</span>}
        {changeType === "negative" && <span className="change-arrow">↓</span>}
        <span>{change}</span>
      </div>
    </div>
  );
}
