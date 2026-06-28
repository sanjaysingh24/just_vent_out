"use client"
import { useState,useRef,useEffect } from "react"
import Image from "next/image"

export const Header=()=>{
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

  
    return(
        <>
          <nav className={scrollY > 40 ? "scrolled" : ""}>
                <a href="/" className="nav-logo">
                  <Image loading="eager" width={100} height={44} src="/main-logo.png" alt="Just Vent Out" />
                </a>
                <ul className="nav-links">
                  <li><a href="#posts">Read</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#guidelines">Guidelines</a></li>
                  <li><a href="#">India</a></li>
                </ul>
                <a href="#" className="nav-cta">Start Venting</a>
              </nav>
        
        
        </>
    )
}