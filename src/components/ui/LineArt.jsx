import Reveal from "./Reveal.jsx";
import styles from "./LineArt.module.css";

/* Gold line drawings that draw themselves in when they reach the screen,
   then keep one slow, quiet loop going: the site's answer to a GIF. SVG, so
   they stay sharp at any size and weigh a few kilobytes. Decorative only. */

const d = (i) => ({ "--i": i });

function Growth() {
  const curve =
    "M20 250 C 80 244, 110 214, 150 204 S 220 176, 260 146 S 340 70, 384 46";
  return (
    <>
      {[70, 130, 190, 250].map((y, i) => (
        <path key={y} className={styles.faint} d={`M20 ${y} H384`} pathLength="1" style={d(i)} />
      ))}
      <path className={styles.gold} d={curve} pathLength="1" style={d(3)} />
      <circle className={styles.traveller} r="4" style={{ offsetPath: `path("${curve}")` }} />
    </>
  );
}

function Tower() {
  const floors = [];
  for (let y = 80; y <= 270; y += 19) floors.push(y);
  const lit = [
    [158, 99], [208, 118], [183, 156], [233, 175], [158, 213], [208, 232], [183, 80], [233, 251],
  ];
  return (
    <>
      <path className={styles.faint} d="M30 290 H374" pathLength="1" style={d(0)} />
      <path className={styles.line} d="M70 290 V160 H128 V290" pathLength="1" style={d(1)} />
      <path className={styles.line} d="M276 290 V118 H334 V290" pathLength="1" style={d(1)} />
      <path className={styles.gold} d="M150 290 V64 L202 22 L254 64 V290" pathLength="1" style={d(2)} />
      {floors.map((y, i) => (
        <path key={y} className={styles.faint} d={`M150 ${y} H254`} pathLength="1" style={d(3 + i * 0.15)} />
      ))}
      {[176, 202, 228].map((x, i) => (
        <path key={x} className={styles.faint} d={`M${x} 64 V290`} pathLength="1" style={d(4 + i * 0.2)} />
      ))}
      {lit.map(([x, y], i) => (
        <rect key={`${x}-${y}`} className={styles.window} x={x - 6} y={y + 3} width="16" height="12" style={{ "--w": i }} />
      ))}
    </>
  );
}

function Car() {
  return (
    <>
      {[212, 228, 244].map((y, i) => (
        <path key={y} className={styles.speed} d={`M${10 + i * 14} ${y} H${96 - i * 10}`} style={{ "--s": i }} />
      ))}
      <path
        className={styles.gold}
        d="M44 200 L50 180 C 92 172 122 160 156 144 C 196 126 246 120 288 132 C 326 142 352 158 372 166 C 384 172 390 184 388 200"
        pathLength="1"
        style={d(0)}
      />
      <path className={styles.line} d="M44 200 H90 M150 200 H292 M352 200 H388" pathLength="1" style={d(1)} />
      <path className={styles.line} d="M172 144 C 204 130 246 128 270 136 L282 154 H178 Z" pathLength="1" style={d(2)} />
      <circle className={styles.line} cx="120" cy="200" r="28" pathLength="1" style={d(2.5)} />
      <circle className={styles.line} cx="322" cy="200" r="28" pathLength="1" style={d(2.5)} />
      <path className={styles.faint} d="M30 228 H392" pathLength="1" style={d(3)} />
    </>
  );
}

function Iris() {
  const cx = 202;
  const cy = 150;
  const blades = Array.from({ length: 8 }, (_, k) => {
    const a = (k / 8) * Math.PI * 2;
    const b = a + (110 * Math.PI) / 180;
    return `M${(cx + 112 * Math.cos(a)).toFixed(1)} ${(cy + 112 * Math.sin(a)).toFixed(1)} L${(
      cx + 42 * Math.cos(b)
    ).toFixed(1)} ${(cy + 42 * Math.sin(b)).toFixed(1)}`;
  });
  return (
    <>
      <circle className={styles.gold} cx={cx} cy={cy} r="112" pathLength="1" style={d(0)} />
      <circle className={styles.faint} cx={cx} cy={cy} r="128" pathLength="1" style={d(1)} />
      <g className={styles.spin} style={{ transformOrigin: `${cx}px ${cy}px` }}>
        {blades.map((p, i) => (
          <path key={p} className={styles.line} d={p} pathLength="1" style={d(1.5 + i * 0.2)} />
        ))}
      </g>
      <circle className={styles.line} cx={cx} cy={cy} r="42" pathLength="1" style={d(3)} />
    </>
  );
}

const art = { growth: Growth, tower: Tower, car: Car, iris: Iris };

export default function LineArt({ name, tone = "dark", className = "" }) {
  const Art = art[name];
  if (!Art) return null;
  return (
    <Reveal variant="fade" className={`${styles.art} ${tone === "light" ? styles.light : ""} ${className}`}>
      <svg viewBox="0 0 404 300" aria-hidden="true" focusable="false">
        <Art />
      </svg>
    </Reveal>
  );
}
