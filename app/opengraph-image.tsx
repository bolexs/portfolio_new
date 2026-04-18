import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Boluwatife Ade-ojo — Infrastructure & Backend Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top left, #1e1b4b 0%, #0a0a0a 55%, #000 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #a78bfa, #6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div style={{ fontSize: "28px", fontWeight: 500, opacity: 0.9 }}>
            bobas.tech
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "#a78bfa",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Boluwatife Ade-ojo
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            Infrastructure & Backend Engineer
          </div>
          <div
            style={{
              fontSize: "30px",
              fontWeight: 400,
              opacity: 0.75,
              maxWidth: "900px",
              lineHeight: 1.3,
            }}
          >
            Designing, automating, and scaling the cloud platforms that power great products.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "22px",
            opacity: 0.7,
          }}
        >
          <span>Cloud</span>
          <span>•</span>
          <span>DevOps</span>
          <span>•</span>
          <span>Kubernetes</span>
          <span>•</span>
          <span>Backend</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
