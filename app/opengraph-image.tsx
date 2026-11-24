import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} – Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: 80,
          backgroundColor: "#0b011a",
          color: "#f9f4d6",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#fde68a",
              fontFamily: "monospace",
            }}
          >
            mc.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 700,
              marginTop: 32,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              color: "#a59fb8",
              marginTop: 20,
            }}
          >
            Software Engineer · AI / Machine Learning
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a59fb8",
            fontFamily: "monospace",
          }}
        >
          matecserhati.hu
        </div>
      </div>
    ),
    { ...size }
  );
}
