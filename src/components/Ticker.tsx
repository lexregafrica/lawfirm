const items = [
  "Trusted legal expertise",
  "Boutique Nairobi law firm",
  "Client-centric legal solutions",
  "Since 2012",
];

export default function Ticker() {
  const track = [...items, ...items];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {track.map((item, i) => (
          <span key={i}>
            {i > 0 && <>&nbsp;✦&nbsp;</>}
            {item}
          </span>
        ))}
        &nbsp;✦&nbsp;
      </div>
    </div>
  );
}
