"use client";

import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Header } from "./HomePage/Header";
import { Footer } from "./HomePage/Footer";
import { Cta } from "./HomePage/Cta";
import { Guidelines } from "./HomePage/Guidelines";
import { Post } from "./HomePage/Post";

export default function Hero() {

  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const isVisible = (id) => visible.has(id);

   const posts = useSelector((state) => state.global.posts);
  const guidelines = useSelector((state) => state.global.guidelines);

  return (
    <>


      {/* NAV */}
      <Header></Header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-blob blob-1" />
        <div className="hero-bg-blob blob-2" />
        <div className="hero-bg-blob blob-3" />
        <div className="hero-inner">
          <span className="hero-eyebrow">A space for honest expression</span>
          <h1 className="hero-title">
            Say what you've
            <br />
            been <em className="hero-oval">holding in</em>
          </h1>
          <p className="hero-sub">
            Just Vent Out is where raw feelings become real words. No performance, no filter —
            just you and the page, finally meeting.
          </p>
          <div className="hero-actions">
            <a href="#posts" className="btn-primary">Read & Relate</a>
            <a href="#" className="btn-ghost">Write Your Story</a>
          </div>
        </div>

      </section>

      {/* QUOTE BAND */}
      <div className="quote-band">
        <p className="quote-text">
          "The colors like poets write down it — lower our heads, and looking forward to the future."
        </p>
        <span className="quote-attr">— Just Vent Out</span>
      </div>

      {/* POSTS */}

      <Post isVisible={isVisible} posts={posts}></Post>
      {/* ABOUT */}
      <section className="about-strip" id="about">
        <div
          id="about-text"
          data-animate
          className={`fade-up${isVisible("about-text") ? " in-view" : ""}`}
        >
          <p className="about-label">About Just Vent Out</p>
          <h2 className="about-title">
            A place built for <em>real</em> people feeling <em>real</em> things
          </h2>
          <p className="about-body">
            Just Vent Out was born from the idea that everyone deserves a soft place to land.
            Here, emotions are not edited before they're shared. Whether it's grief, joy, confusion,
            or something without a name yet — this community holds it.
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num">12K+</div>
              <div className="stat-label">Stories shared</div>
            </div>
            <div>
              <div className="stat-num">6K+</div>
              <div className="stat-label">Voices heard</div>
            </div>
            <div>
              <div className="stat-num">40+</div>
              <div className="stat-label">Topics covered</div>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-ring">
            <div className="about-ring-inner">
              <p className="about-quote-inside">
                "You are allowed to feel everything."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <Guidelines isVisible={isVisible} guidelines={guidelines}></Guidelines>

      {/* CTA */}

      <Cta isVisible={isVisible}></Cta>
      {/* FOOTER */}
      <Footer></Footer>
    </>
  );
}