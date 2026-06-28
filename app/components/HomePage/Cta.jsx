export const Cta =({isVisible})=>{
    return(
        <>
        
           <section className="cta-section">
        <div
          id="cta-block"
          data-animate
          className={`fade-up${isVisible("cta-block") ? " in-view" : ""}`}
        >
          <h2 className="cta-title">
            Ready to <em>let it out?</em>
          </h2>
          <p className="cta-sub">
            No audience. No approval needed. Just you, finally honest with the page.
          </p>
          <a href="#" className="btn-primary">Start Writing</a>
        </div>
      </section>
        </>
    )
}