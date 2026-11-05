/* Line icons drawn on a 24px grid, stroked in currentColor so they take
   the colour of whatever they sit in. */
const paths = {
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="1.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18M10.5 12.5v2h3v-2" />
    </>
  ),
  layers: <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3ZM3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" />,
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  hourglass: <path d="M6.5 3h11M6.5 21h11M7.5 3c0 4.5 4.5 6 4.5 9s-4.5 4.5-4.5 9M16.5 3c0 4.5-4.5 6-4.5 9s4.5 4.5 4.5 9" />,
  tower: (
    <>
      <path d="M4 21h16M6 21V8l6-4 6 4v13" />
      <path d="M9.5 21v-4h5v4M9 10.5h1.5M13.5 10.5H15M9 13.5h1.5M13.5 13.5H15" />
    </>
  ),
  house: (
    <>
      <path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5.5h4V20" />
    </>
  ),
  car: (
    <>
      <path d="M3.5 16.5v-3.2l2-4.6A2 2 0 0 1 7.3 7.5h9.4a2 2 0 0 1 1.8 1.2l2 4.6v3.2H3.5Z" />
      <path d="M3.5 13.3h17M6 16.5v2M18 16.5v2" />
      <circle cx="7.5" cy="15" r=".6" />
      <circle cx="16.5" cy="15" r=".6" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m10 9.2 5 2.8-5 2.8V9.2Z" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </>
  ),
  sliders: <path d="M5 4v16M12 4v16M19 4v16M3 8h4M10 15h4M17 10h4" />,
  growth: <path d="M3.5 20.5h17M5 16l5-5 3.5 3.5L20 8M15.5 8H20v4.5" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.5c0 4.3-3 7.7-7 9-4-1.3-7-4.7-7-9V6l7-2.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  chat: <path d="M4.5 5.5h15v10h-8l-4.5 3.5v-3.5H4.5v-10ZM8.5 9.5h7M8.5 12h4.5" />,
  scale: <path d="M12 4v16M8 20h8M5 7.5h14M7 7.5 4 13.5a3 3 0 0 0 6 0L7 7.5ZM17 7.5l-3 6a3 3 0 0 0 6 0l-3-6Z" />,
  phone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 17.5h2" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3.5" width="6" height="11" rx="3" />
      <path d="M6 11.5a6 6 0 0 0 12 0M12 17.5v3M9 20.5h6" />
    </>
  ),
  handshake: <path d="m3 12 3.5-4.5 3 1 2.5-1.5 3 1L19 6.5l2 5M3 12l3 3M21 11.5l-4.5 4.5a1.5 1.5 0 0 1-2.1 0l-.4-.4M6 15l2.5 2.5a1.5 1.5 0 0 0 2.1 0M10.6 17.5l1 1a1.5 1.5 0 0 0 2.1 0l.3-.3M9.5 8.5l3.5 3.5" />,
};

export default function Icon({ name, size = 24, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
