import Image from "next/image"
export const Footer=()=>{
    return(
        <>
         <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Image loading="eager" width={100} height={44} src="/main-logo.png" alt="Just Vent Out" />
            <p className="footer-tagline">Feelings, finally written.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#">Read Stories</a></li>
                <li><a href="#">Write</a></li>
                <li><a href="#">Topics</a></li>
                <li><a href="#">India</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Community</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#guidelines">Guidelines</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Just Vent Out. All rights reserved.</span>
          <span className="footer-made">Made with <span>♥</span> for every feeling.</span>
        </div>
      </footer>
        </>
    )
}