import React, { Component } from 'react';
import './App.css';
import anilImage from '../src/images/anil.jpg';
import resume from '../src/images/resume.pdf';

class App extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef() ;
    this.myRef2 = React.createRef() ;
    this.myRef3 = React.createRef() ;
    this.myRef5 = React.createRef();
  }


  render() {
    return (
       <body>
          <header id="top" ref = {this.myRef}>
            <nav id="nav-wrap">

              <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
              <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

              <ul id="nav" class="nav">
                  <li class="current"><a class="smoothscroll" href="#top" onClick={() => {this.myRef.current.scrollIntoView({behavior: 'smooth' });
          }}>Top</a></li>
                  <li><a class="smoothscroll" href="#about" onClick={() => {this.myRef2.current.scrollIntoView({behavior: 'smooth' });
          }}>About</a></li>
                <li><a class="smoothscroll" href="#resume" onClick={() => {this.myRef3.current.scrollIntoView({behavior: 'smooth' });
          }}>Resume</a></li>
                  <li><a class="smoothscroll" href="#contact" onClick={() => {this.myRef5.current.scrollIntoView({behavior: 'smooth' });
          }}>Contact</a></li>
              </ul>
            </nav> 
            <div id="info" class="info"> 
              <h1> Anil Ramsoomye </h1>
              <h3> Software Engineer </h3>
              <h5> Computer Science | Applied Math and Statistics </h5> </div>
              <ul class="social" >
              <a href="https://github.com/AnilRamsoomye" ><i class="fa fa-github" aria-hidden="true" ></i></a> 
              <a href="mailto:anilramsoomye@gmail.com"><i class="fa fa-envelope" aria-hidden="true" ></i></a>
              <a href="https://www.linkedin.com/in/anilramsoomye/"><i class="fa fa-linkedin"></i></a>

              </ul>

            

        </header>
        <section id = "about" ref={this.myRef2} > 
        <div style={{}} >
          <ul class="grid" >
            <li class="item a"><div>About</div></li>
            <li class="item b"><img src={anilImage} height="400px" width="auto" alt="Picture of me!"/></li>
            <li class="item c">Hi, I’m Anil Ramsoomye a recent graduate of <b>Stony Brook University</b> majoring in <b>Computer Science</b> and <b>Applied Math</b>. I am currently seeking a Software Developer position and my main goal is to find a position that allows me to continue to learn while making tangible contributions.
            One of my main takeaways from working in the startup environment is the ability to adapt, learn quickly and produce at that speed.</li>
  
            <li class="item"> <div class="c">I am located in NYC and am also open to remote work/relocation if the situation is a good fit.</div> 
            <div class="c"> I am experienced in <i>analyzing algorithms</i> and utilizing <i>data structures</i> to procure concise efficient code. Also, I work well in a team-setting and have the ability to <i>effectively communicate</i> with all members of the development process including clients.  </div>
            <div class="subHeading">Languages</div>
            <ul class="grid2"> 
            <li class="item lang"> Java</li>
            <li class="item lang"> Python</li>
            <li class="item lang"> Javascript</li>
            <li class="item lang"> C</li>
            <li class="item lang"> HTML/CSS</li>
            <li class="item lang"> R</li>
            <li class="item lang"> MATLAB</li>
            <li class="item lang"> Assembly(MIPS)</li>

            </ul>
            </li>
            
          </ul>

        </div>
        
        
       
        </section>
        <section id = "resume" ref={this.myRef3} > 
        <div style={{  }} />
        <ul class="grid" >
            <li class="item e"><div>Resume</div><div class="download"><a href={resume} download="Anil_Ramsoomye_Resume"><input type="button" value="Download Resume" id="rotate" /></a></div></li>
            <li></li>
    
            <li><iframe src="https://resume.creddle.io/embed/7q9m5v32hp"
  width="850px" height="1100px" seamless></iframe></li>
        <li></li>

        </ul>
        </section>
        
        <section id = "contact" ref={this.myRef5} > 
        <div style={{ }} />
          <div class="f">Contact</div>
          <div class="contactInfo">
          <div class="first"><h3>Email me at</h3></div><div>anilramsoomye@gmail.com</div>
          <div class="first">Connect with me on</div><div>https://www.linkedin.com/in/anilramsoomye/</div>
          <div class="first">Browse my work</div><div>https://github.com/AnilRamsoomye</div>
          
          <div class="second">I look forward to speaking with you!</div>
          </div>
        </section>

       </body>
       
  );
  }
}

export default App;
