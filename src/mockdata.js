// =============================================
// NESTLY DASHBOARD — Mock Data
// Swap these with real API calls as needed
// =============================================
import kp1 from "./assets/kp1.png";
import kp2 from "./assets/kp2.png";
import kp3 from "./assets/kp3.png";
import kp4 from "./assets/kp4.png";
import kp5 from "./assets/kp5.png";
import kp6 from "./assets/kp6.png";

export const statsData = [
  {
    id: "arrivals",
    label: "Arrivals today",
    value: 4,
    change: "+2 vs yesterday",
    changeType: "positive",
    icon: kp1,
    color: "#135B42",
    bgColor: "#50D6BC",
  },
  {
    id: "departures",
    label: "Departures today",
    value: 3,
    change: "Same as yesterday",
    changeType: "neutral",
    icon: kp2,
    color: "#FD6E55",
    bgColor: "#FD6E5526",
  },
  {
    id: "occupancy",
    label: "Properties occupied",
    value: "8/10",
    subValue: "80% occupancy",
    change: "Needs attention",
    changeType: "neutral",
    icon: kp3,
    color: "#49379F",
    bgColor: "#E0E1FF",
  },
  {
    id: "cleanings",
    label: "Cleanings due",
    value: 2,
    change: "Needs attention",
    changeType: "warning",
    icon: kp4,
    color: "#794819",
    bgColor: "#FDE4BB",
  },
  {
    id: "revenue",
    label: "Revenue this month",
    value: "$3,240",
    change: "+18% vs last month",
    changeType: "positive",
    icon: kp5,
    color: "#004E90",
    bgColor: "#D4EBFF",
    isMoneyIcon: true,
  },
  {
    id: "rating",
    label: "Avg. guest rating",
    value: "4.8",
    change: "+0.2 vs last month",
    changeType: "positive",
    icon: kp6,
    color: "#C53637",
    bgColor: "#FFFBEB",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 2100, target: 2400 },
  { month: "Feb", revenue: 2800, target: 2600 },
  { month: "Mar", revenue: 2400, target: 2800 },
  { month: "Apr", revenue: 3100, target: 2900 },
  { month: "May", revenue: 2700, target: 3000 },
  { month: "Jun", revenue: 3240, target: 3100 },
];

export const bookingChannels = [
  { name: "Airbnb",       value: 45, count: 131, color: "#FF6B6B" },
  { name: "Booking.com",  value: 31, count: 90,  color: "#3B82F6" },
  { name: "Direct",       value: 16, count: 47,  color: "#F97316" },
  { name: "VRBO",         value: 8,  count: 23,  color: "#8B5CF6" },
];

export const arrivalsToday = [
  {
    id: 1,
    guest: { name: "Sara A.",   initials: "SA", color: "#000000", colorbg:"#50D6BC" },
    property: "Marina Apt 3",
    time: "2:00 PM",
    channel: "Airbnb",
    channelColor: "#FF6B6B",
    status: "Confirmed",
    statusColor: "#135B42",
    statusBg: "#D4F4E5",
  },
  {
    id: 2,
    guest: { name: "James M.",  initials: "JM", color: "#50D6BC", colorbg:"#000000" },
    property: "Downtown Loft",
    time: "4:10 PM",
    channel: "Booking",
    channelColor: "#3B82F6",
    status: "Pending pay",
    statusColor: "#794819",
    statusBg: "#FDE4BB",
  },
  {
    id: 3,
    guest: { name: "Layla K.",  initials: "LK", color: "#ffffff", colorbg:"#FD6E55" },
    property: "Palm Villa",
    time: "5:00 PM",
    channel: "Direct",
    channelColor: "#F97316",
    status: "Confirmed",
    statusColor: "#135B42",
    statusBg: "#D4F4E5",
  },
];

export const departuresToday = [
  {
    id: 1,
    guest: { name: "Sam N.",   initials: "SN", color: "#50D6BC", colorbg:"#000000" },
    property: "Sea View Suite",
    time: "11:00 AM",
    channel: "Airbnb",
    channelColor: "#FF6B6B",
    status: "Checked out",
    statusColor: "#50D6BC",
    statusBg: "#000000",
  },
  {
    id: 2,
    guest: { name: "Emma B.",  initials: "EB", color: "#000000", colorbg:"#50D6BC" },
    property: "Garden Studio",
    time: "12:00 PM",
    channel: "VRBO",
    channelColor: "#8B5CF6",
    status: "Late check-out",
    statusColor: "#794819",
    statusBg: "#FDE4BB",
  },
  {
    id: 3,
    guest: { name: "Tariq C.", initials: "TC", color: "#ffffff", colorbg:"#FD6E55" },
    property: "Old Town Hub",
    time: "10:30 AM",
    channel: "Direct",
    channelColor: "#F97316",
    status: "Checked out",
    statusColor: "#50D6BC",
    statusBg: "#000000",
  },
];

export const cleaningStatus = [
  {
    id: 1,
    property: "Marina Apt 3",
    status: "clean",
    statusLabel: "Clean",
    lastCleaned: "Today, 9:00 AM",
    cleaner: "Mariam F.",
    note: null,
  },
  {
    id: 2,
    property: "Downtown Loft",
    status: "in-progress",
    statusLabel: "In Progress",
    lastCleaned: "Started: 11:30 AM",
    cleaner: "Mariam S.",
    note: null,
  },
  {
    id: 3,
    property: "Palm Villa",
    status: "needs-cleaning",
    statusLabel: "Needs Cleaning",
    lastCleaned: "Checked out: 11:30 AM",
    cleaner: "Not assigned",
    note: null,
  },
  {
    id: 4,
    property: "Sea View Suite",
    status: "occupied",
    statusLabel: "Occupied",
    lastCleaned: "Check-in: Jan 3",
    cleaner: "Check-out: Tomorrow",
    note: null,
  },
];

export const recentActivity = [
  {
    id: 1,
    type: "booking",
    text: "New booking confirmed — Sara Ahmed · Marina Apt 3",
    time: "2 min ago",
    color: "#10B981",
  },
  {
    id: 2,
    type: "cleaning",
    text: "Cleaning completed — Downtown Loft · Cleaned by Fatima R.",
    time: "1 hr ago",
    color: "#6C63FF",
  },
  {
    id: 3,
    type: "lock",
    text: "Smart lock access granted — Palm Villa · Guest James M. checked in",
    time: "3 hr ago",
    color: "#3B82F6",
  },
  {
    id: 4,
    type: "review",
    text: "Review received — ★★★★★ · Guest: \"Amazing stay\"",
    time: "Yesterday",
    color: "#F59E0B",
  },
  {
    id: 5,
    type: "price",
    text: "Price updated by AI — Marina Apt 3 · $185 → $212/night (+13%)",
    time: "Yesterday",
    color: "#F97316",
  },
];

export const occupancyRate = 80;