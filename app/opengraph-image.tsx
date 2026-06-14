import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'ParadigmFindr — Find your therapy'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ color: '#71717a', fontSize: 18, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            PARADIGMFINDR
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <span style={{ color: '#fbbf24', fontSize: 18, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            FIND YOUR THERAPY
          </span>
          <h1 style={{ color: '#fafafa', fontSize: 88, fontWeight: 900, lineHeight: 1, margin: 0, letterSpacing: '-0.03em' }}>
            16 ways to heal.
            <br />
            Which fits you?
          </h1>
          <p style={{ color: '#71717a', fontSize: 24, margin: 0, lineHeight: 1.5 }}>
            7 questions. Your top matches. No DSM required.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['CBT', 'IFS', 'ACT', 'Somatic', 'Narrative', 'Logotherapy', 'EFT'].map((name) => (
            <span
              key={name}
              style={{
                color: '#3f3f46',
                fontSize: 14,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
