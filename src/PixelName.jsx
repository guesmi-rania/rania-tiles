import { font } from "./pixelFont";

export default function PixelName({ text }) {
  return (
    <div className="name">
      {text.split("").map((char, i) =>
        char === " " ? (
          <div key={i} className="space" />
        ) : (
          <div key={i} className="letter">
            {font[char].map((row, r) =>
              row.split("").map((pixel, c) => {
                const delay = (i * 0.3) + (r + c) * 0.08;
                return (
                  <div
                    key={`${r}-${c}`}
                    className={`pixel ${pixel === "1" ? "on" : ""}`}
                    style={{ animationDelay: `${delay}s` }}
                  />
                );
              })
            )}
          </div>
        )
      )}
    </div>
  );
}
