import "./GuestTable.css";

function Avatar({ guest }) {
  return (
    <div
      className="guest-avatar"
      style={{ background: guest.colorbg, color: guest.color }}
    >
      {guest.initials}
    </div>
  );
}

function ChannelBadge({ channel, color }) {
  return (
    <span className="channel-badge" style={{ background: color + "18", color }}>
      {channel}
    </span>
  );
}

function StatusBadge({ status, color, bg }) {
  return (
    <span className="status-badge" style={{ background: bg, color }}>
      {status}
    </span>
  );
}

function GuestRow({ guest }) {
  return (
    <tr className="guest-row">
      <td>
        <div className="guest-cell">
          <Avatar guest={guest.guest} />
          <span className="guest-name">{guest.guest.name}</span>
        </div>
      </td>
      <td className="property-cell">{guest.property}</td>
      <td className="time-cell">{guest.time}</td>
      <td>
        <ChannelBadge channel={guest.channel} color={guest.channelColor} />
      </td>
      <td>
        <StatusBadge status={guest.status} color={guest.statusColor} bg={guest.statusBg} />
      </td>
    </tr>
  );
}

export default function GuestTable({ title, guests, countColor, icon, countBg }) {
  return (
    <div className="guest-table-card">
      <div className="guest-table-header">
        <div className="guest-table-title">
          <h3>{title}</h3>
          <span className="guest-count" style={{ background: countBg, color: countColor }}>
            {guests.length}
          </span>
        </div>
        <button className="view-all-btn">View all →</button>
      </div>

      <div className="table-scroll">
        <table className="guest-table">
          <thead>
            <tr>
              <th>GUEST</th>
              <th>PROPERTY</th>
              <th>TIME</th>
              <th>CHANNEL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g) => (
              <GuestRow key={g.id} guest={g} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
