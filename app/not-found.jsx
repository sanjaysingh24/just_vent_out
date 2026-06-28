import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <style>{`
        .nf-wrap {
          min-height: 100vh;
          background: #FAF7F2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .nf-blob-1 {
          position: absolute;
          width: 400px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(160,69,58,0.1) 0%, transparent 70%);
          top: -80px; left: -100px;
          pointer-events: none;
        }

        .nf-blob-2 {
          position: absolute;
          width: 360px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(107,124,92,0.09) 0%, transparent 70%);
          bottom: -60px; right: -80px;
          pointer-events: none;
        }

        .nf-inner {
          position: relative; z-index: 1;
          max-width: 520px;
        }

        .nf-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(100px, 20vw, 160px);
          font-weight: 700;
          line-height: 1;
          color: #F0EAD6;
          letter-spacing: -4px;
          margin-bottom: -20px;
          user-select: none;
        }

        .nf-number span {
          color: #A0453A;
        }

        .nf-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 700;
          color: #2C2420;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .nf-title em {
          font-style: italic;
          color: #A0453A;
        }

        .nf-sub {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #7A6A62;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 40px;
        }

        .nf-divider {
          width: 48px;
          height: 2px;
          background: #C49A6C;
          border-radius: 2px;
          margin: 0 auto 40px;
          opacity: 0.5;
        }

        .nf-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .nf-btn-primary {
          background: #A0453A;
          color: #fff;
          padding: 13px 30px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .nf-btn-primary:hover {
          background: #C4705A;
          transform: translateY(-2px);
        }

        .nf-btn-ghost {
          border: 1.5px solid rgba(160,69,58,0.3);
          color: #A0453A;
          padding: 12px 30px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .nf-btn-ghost:hover {
          background: rgba(160,69,58,0.05);
          transform: translateY(-2px);
        }

        .nf-footer-note {
          margin-top: 48px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #C49A6C;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>

      <div className="nf-wrap">
        <div className="nf-blob-1" />
        <div className="nf-blob-2" />

        <div className="nf-inner">
          <div className="nf-number">4<span>0</span>4</div>

          <h1 className="nf-title">
            This page got <em>lost</em> in thought
          </h1>

          <div className="nf-divider" />

          <p className="nf-sub">
            The page you're looking for has wandered off — maybe it needed some quiet time.
            Let's get you back somewhere familiar.
          </p>

          <div className="nf-actions">
            <Link href="/" className="nf-btn-primary">Back to Home</Link>
            <Link href="/#posts" className="nf-btn-ghost">Read Stories</Link>
          </div>

          <p className="nf-footer-note">Just Vent Out · A space for honest expression</p>
        </div>
      </div>
    </>
  );
}