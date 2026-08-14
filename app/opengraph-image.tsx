import { ImageResponse } from "next/og";
import { site, youtubeChannel } from "@/lib/site-config";

/**
 * Social share card, generated at build time. Without this, previews on
 * WhatsApp, LinkedIn and Slack render as bare text — which is the first
 * impression when a prospective client forwards the link to a colleague.
 *
 * Rendered by Satori, which supports a flexbox-only subset of CSS: no grid, no
 * external stylesheets, and every non-text element needs an explicit display.
 * It deliberately uses the default sans rather than fetching Outfit over the
 * network, so a font CDN hiccup can never fail the build.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#111a47",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Soft brand washes, echoing the site's blob backgrounds */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            backgroundColor: "#e11d48",
            opacity: 0.22,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundColor: "#8b7cf6",
            opacity: 0.18,
            display: "flex",
          }}
        />

        {/* --- Top row: mark + availability ------------------------------- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 76,
                height: 76,
                borderRadius: 24,
                backgroundColor: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                fontWeight: 800,
                color: "#111a47",
                letterSpacing: -1,
              }}
            >
              {site.initials}
              <span style={{ color: "#e11d48" }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 22,
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 700, color: "#ffffff" }}>
                {site.name}
              </div>
              <div style={{ fontSize: 21, color: "#c9cbe8", marginTop: 4 }}>
                {site.role}
              </div>
            </div>
          </div>

          {site.openToWork && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "2px solid rgba(255,255,255,0.2)",
                borderRadius: 9999,
                padding: "12px 26px",
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 9999,
                  backgroundColor: "#34c759",
                  display: "flex",
                  marginRight: 12,
                }}
              />
              <div style={{ fontSize: 21, color: "#ffffff", fontWeight: 600 }}>
                Available for work
              </div>
            </div>
          )}
        </div>

        {/* --- Headline --------------------------------------------------- */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 82,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: -2.5,
            }}
          >
            I build digital products
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2.5,
              color: "#ffffff",
            }}
          >
            that&nbsp;
            <span
              style={{
                color: "#ff8fab",
                borderBottom: "8px solid #e11d48",
                paddingBottom: 6,
              }}
            >
              people love
            </span>
          </div>
        </div>

        {/* --- Bottom row: proof + url ------------------------------------ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {["Next.js", "React Native", "Node.js", "Python"].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#c9cbe8",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  borderRadius: 9999,
                  padding: "10px 22px",
                  marginRight: 12,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, color: "#ff8fab", fontWeight: 600 }}>
            {youtubeChannel.handle}
          </div>
        </div>
      </div>
    ),
    size
  );
}
