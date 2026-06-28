export default function Loading() {
  return (
    <>
      <style>{`
        .loading-wrap {
          min-height: 100vh;
          background: #FAF7F2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .loading-logo {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #2C2420;
          letter-spacing: -0.01em;
        }

        .loading-logo em {
          font-style: italic;
          color: #A0453A;
        }

        .ink-dots {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ink-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #A0453A;
          animation: inkDrop 1.4s ease-in-out infinite;
        }

        .ink-dot:nth-child(1) { animation-delay: 0s; background: #A0453A; }
        .ink-dot:nth-child(2) { animation-delay: 0.2s; background: #C49A6C; }
        .ink-dot:nth-child(3) { animation-delay: 0.4s; background: #6B7C5C; }

        .loading-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #7A6A62;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .loading-line {
          width: 120px;
          height: 1px;
          background: #F0EAD6;
          position: relative;
          overflow: hidden;
          border-radius: 1px;
        }

        .loading-line::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, #A0453A, transparent);
          animation: lineSlide 1.6s ease-in-out infinite;
        }

        @keyframes inkDrop {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        @keyframes lineSlide {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>

      <div className="loading-wrap">
        <div className="loading-logo">Just <em>Vent</em> Out</div>
        <div className="loading-line" />
        <div className="ink-dots">
          <div className="ink-dot" />
          <div className="ink-dot" />
          <div className="ink-dot" />
        </div>
        <p className="loading-text">Finding the right words…</p>
      </div>
    </>
  );
}