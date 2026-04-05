import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#110720",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#a855f7", fontFamily: "monospace" }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 64, fontWeight: 600, letterSpacing: -1.5 }}>
          {siteConfig.role}
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.65)", maxWidth: 900 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
