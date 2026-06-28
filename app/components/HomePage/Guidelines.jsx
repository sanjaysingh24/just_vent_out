export const Guidelines=({isVisible,guidelines})=>{
    return(
        <>
        <section className="guidelines-section" id="guidelines">
        <div
          id="guidelines-header"
          data-animate
          className={`fade-up${isVisible("guidelines-header") ? " in-view" : ""}`}
        >
          <p className="section-label">Community guidelines</p>
          <h2 className="section-title">How we hold this space</h2>
        </div>
        {guidelines.map((g) => (
          <div
            key={g.num}
            id={`guide-${g.num}`}
            data-animate
            className={`guide-item${isVisible(`guide-${g.num}`) ? " in-view" : ""}`}
          >
            <span className="guide-num">{g.num}</span>
            <p className="guide-rule">{g.rule}</p>
          </div>
        ))}
      </section>
        </>
    )
}