"use client";

import { useState, useRef, useEffect } from "react";

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

  const posts = [
    {
      id: "p1",
      title: "The Quiet Weight of Unsaid Things",
      tag: "Emotions",
      excerpt: "Sometimes words stay trapped inside — this is a space to finally let them breathe.",
      color: "#A0453A",
    },
    {
      id: "p2",
      title: "When Anxiety Feels Like Home",
      tag: "Mental Health",
      excerpt: "Learning to notice when worry becomes familiar, and what to do with that knowing.",
      color: "#6B7C5C",
    },
    {
      id: "p3",
      title: "Colours That Hold Memory",
      tag: "Reflection",
      excerpt: "A cream wall, a terracotta bowl — how our surroundings carry our emotional history.",
      color: "#C49A6C",
    },
    {
      id: "p4",
      title: "Writing as Release",
      tag: "Journaling",
      excerpt: "You don't need to be a writer. You just need to start the sentence.",
      color: "#A0453A",
    },
    {
      id: "p5",
      title: "Sitting With the Hard Feelings",
      tag: "Healing",
      excerpt: "Resistance makes pain louder. What happens when we stop fighting what we feel?",
      color: "#6B7C5C",
    },
    {
      id: "p6",
      title: "Letters to Younger Me",
      tag: "Growth",
      excerpt: "If you could reach back across time, what would you want yourself to know?",
      color: "#C49A6C",
    },
  ];

  const guidelines = [
    { num: "01", rule: "Write without judgement — this is your space, not a stage." },
    { num: "02", rule: "You don't need perfect words. Raw ones are welcome here." },
    { num: "03", rule: "Read others with care. Every vent carries real weight." },
    { num: "04", rule: "Support gently. You don't have to fix — sometimes just witnessing is enough." },
  ];

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