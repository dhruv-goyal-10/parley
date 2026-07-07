import { ImageResponse } from "next/og";

export const alt =
  "Parley — the AI meeting assistant that turns every conversation into action.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_BASE =
  "https://cdn.jsdelivr.net/npm/@fontsource/manrope/files";

async function loadFont(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font fetch failed: ${url}`);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  const [regular, bold, extraBold] = await Promise.all([
    loadFont(`${FONT_BASE}/manrope-latin-500-normal.woff`),
    loadFont(`${FONT_BASE}/manrope-latin-700-normal.woff`),
    loadFont(`${FONT_BASE}/manrope-latin-800-normal.woff`),
  ]);

  const bg = "#faf7f0";
  const surfaceElevated = "#ffffff";
  const text = "#1a1611";
  const textMuted = "#6b6255";
  const primary = "#4a3520";
  const primarySoft = "rgba(74, 53, 32, 0.08)";
  const primarySoftStrong = "rgba(74, 53, 32, 0.16)";
  const border = "#e4ded0";
  const editorialFgMuted = "#b8aa95";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: bg,
          fontFamily: "Manrope",
          padding: 72,
          color: text,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 620,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 999,
                  background: bg,
                }}
              />
            </div>
            <span style={{ fontSize: 32, fontWeight: 700, color: text }}>
              Parley
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontSize: 76,
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                color: text,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Never take</span>
              <span>meeting notes</span>
              <span>
                again<span style={{ color: primary }}>.</span>
              </span>
            </div>
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.45,
                color: textMuted,
                maxWidth: 480,
              }}
            >
              The AI meeting assistant that turns every conversation into action.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: primary,
              }}
            />
            <span
              style={{ fontSize: 16, fontWeight: 600, color: textMuted }}
            >
              parley-liart.vercel.app
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginLeft: 24,
          }}
        >
          <div
            style={{
              width: 440,
              display: "flex",
              flexDirection: "column",
              background: surfaceElevated,
              border: `1px solid ${border}`,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 48px rgba(26, 22, 17, 0.10)",
            }}
          >
            <div
              style={{
                background: text,
                color: editorialFgMuted,
                padding: "14px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 14,
              }}
            >
              <span style={{ color: "#faf7f0", fontWeight: 700 }}>
                Parley
              </span>
              <span>Product Team Sync</span>
            </div>

            <div
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  alignSelf: "flex-start",
                  background: primarySoft,
                  color: primary,
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "6px 12px",
                  borderRadius: 999,
                  display: "flex",
                }}
              >
                Summarized
              </div>

              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: text,
                  display: "flex",
                }}
              >
                Aligned on Q2 roadmap, onboarding tweaks, and analytics
                enhancements. Owners assigned.
              </div>

              <div
                style={{
                  height: 1,
                  background: border,
                  display: "flex",
                }}
              />

              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: textMuted,
                  display: "flex",
                }}
              >
                Action items
              </div>

              {[
                { task: "Finalize onboarding flow updates", owner: "Sarah" },
                { task: "Share analytics event schema", owner: "Alex" },
                { task: "Prep feedback summary", owner: "Priya" },
              ].map((item) => (
                <div
                  key={item.owner}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 12px",
                    background: bg,
                    borderRadius: 10,
                  }}
                >
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 999,
                      background: primary,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: bg,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      flex: 1,
                      fontSize: 14,
                      fontWeight: 600,
                      color: text,
                    }}
                  >
                    {item.task}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: primary,
                      background: primarySoftStrong,
                      padding: "4px 10px",
                      borderRadius: 999,
                      display: "flex",
                    }}
                  >
                    {item.owner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: regular, weight: 500, style: "normal" },
        { name: "Manrope", data: bold, weight: 700, style: "normal" },
        { name: "Manrope", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
