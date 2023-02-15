function Index() {
    return <div>
    <header>
        <h1 className="logo">Zak Taylor</h1>
        <img src="me.jpg" alt="my pic"></img>
        <nav>  
            <ul>
            
                <li><a href="#about">About</a></li>
                <li><a href="#MyWork">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>   
        </nav>
    </header>

    <section className="about">
        <h1 id="about">About Me</h1>
        <p>Hello, I'm Zak Taylor and I reside in Tucson, AZ. I am currently learning full stack development at a bootcamp at the UofA. I hope to expand my portfolio and continue to learn coding and design.</p>
    </section>
    <section className="myWork">
        <h1 id="MyWork">My Work</h1>
        <div className="First_Challenge">
            <div className="bigCard">
                <a href="https://mrgreen12375.github.io/drink/"><img className="cardImg" src="underwater.jpg"></img></a>
                <h3>Drink App</h3>
            </div>
        </div>
        <div className="my_work_flex">
            <div className="bigCard">
                <a href="https://agile-sea-60043.herokuapp.com/"><img className="cardImg" src="Devtek.JPG"></img></a>
                <h3>DevTek App</h3>
            </div>
            <div className="bigCard">
                <a href="https://appoint-me.herokuapp.com/"><img className="cardImg" src="apntmepic.JPG"></img></a>
                <h3>Appointment App</h3>
            </div>
            <div className="bigCard">
                <a href="https://taylorzak.github.io/020-challenge/"><img className="cardImg" src="wave.jpg"></img></a>
                <h3>Puzzles</h3>
            </div>
            <div className="bigCard">
                <a href="https://taylorzak.github.io/020-challenge/"><img className="cardImg" src="fiber.jpg"></img></a>
                <h3>Run.Buddy</h3>
            </div>
        </div>    
    </section>
    <footer>
        <h1 id="contact">Contact Me</h1>
        <nav>  
            <ul>
                <li><a href="tel:15209557366" target="_blank">1-520-955-7366</a></li>
                <li><a href="https://mail.google.com/" target="_blank">taylorzak28@outlook.com</a></li>
                <li><a href="https://github.com/" target="_blank">github</a></li>
                <li><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
            </ul>   
        </nav>
        
    </footer>

</div>
;
  }
  
  export default Index;