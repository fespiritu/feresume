/* eslint-disable array-callback-return */
import React from 'react';
import './App.css';
import resume from './resume.json';
import Experience from './components/Experience';
import Education from './components/Education';
import Language from './components/Language';
import Interest from './components/Interest';
import Skillset from './components/Skillset';


const App = () => {
    
    const renderSkillsets = () => {
        const results = [];
        resume.skillSets.map((item, i) => {
            results.push(<Skillset item={item} key={i}/>);
        });
        return results;
    }
    const renderInterests = () => {
        const results = [];
        resume.interests.map((item, i) => {
            results.push(<Interest item={item} key={i}/>);
        });
        return results;
    }
    const renderLanguages = () => {
        const results = [];
        resume.languages.map((item, i) => {
            results.push(<Language item={item} key={i}/>);
        });
        return results;
    }
    const renderEducation = () => {
        const results = [];
        resume.educations.map((item, i) => {
            results.push(<Education item={item} key={i}/>);
        });
        return results;
    }
    const renderExperiences = () => {
        const results = [];
        resume.experiences.map((item, i) => {
            results.push(<Experience item={item} key={i}/>);
        });
        return results;
    };
    
  return (
    <div className="wrapper">
      <div className="sidebar-wrapper">
          <div className="profile-container">
              <img className="profile" src={resume.image} alt="" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">{resume.desiredTitle}</h3>
          </div>
          
          <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
                  <li className="email"><i className="fas fa-envelope"></i><a href={`mailto: ${resume.email}`}>{resume.email}</a></li>
                  <li className="phone"><i className="fas fa-phone"></i><a href={resume.phoneMobile}>{resume.phoneMobile}</a></li>
                  <li className="website"><i className="fas fa-globe"></i><a href={resume.website} rel="noopener noreferrer" target="_blank">{resume.website}</a></li>
                  <li className="linkedin"><i className="fab fa-linkedin-in"></i><a href={`https://www.linkedin.com/in/${resume.linkedIn}`} rel="noopener noreferrer" target="_blank">{resume.linkedIn}</a></li>
                  {/* <li className="github"><i className="fab fa-github"></i><a href="#" target="_blank">github.com/username</a></li> */}
                  <li className="twitter"><i className="fab fa-twitter"></i><a href={`https://twitter.com/${resume.twitter}`} rel="noopener noreferrer" target="_blank">{resume.twitter}</a></li>
              </ul>
          </div>
          <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
              {renderEducation()}
          </div>
          
          <div className="languages-container container-block">
              <h2 className="container-block-title">Languages</h2>
              <ul className="list-unstyled interests-list">
                {renderLanguages()}
              </ul>
              
          </div>
          
          <div className="interests-container container-block">
              <h2 className="container-block-title">Interests</h2>
              <ul className="list-unstyled interests-list">
                  {renderInterests()}
              </ul>
          </div>
          
      </div>
      
      <div className="main-wrapper">
          
          <section className="section summary-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
              <div className="summary">
                  <p>{resume.careerProfile}</p>
              </div>
          </section>
          
          <section className="section experiences-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
              
              {renderExperiences()}
              
          </section>
          
          
          <section className="skills-section section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
              <div className="skillset">        
                {renderSkillsets()}
              </div>  
          </section>
          
      </div>
  </div>
  );
}

export default App;
