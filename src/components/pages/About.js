import React from 'react';
import bubbles from '../../assets/images/bubbles-logic.jpg'

export default function About() {
  return (
    <div className="paraContainer col-sm-12 col-lg-8">
      <img className="bubblesImg" src={bubbles} alt="Tye Stanley" />
      <h2>About Me</h2>
      <p>
        My name is Tye Stanley and I was born and raised in Texas, United States. 
        I have been drawn to problem solving since I was 4 years old. And the moment I 
        finished high school I knew that I wanted to pursue Software Engineering given its 
        function to problem solve.
      </p>
      <p>
        However, due to family circumstances I was forced to pushed back my education 
        pursue and I landed where I am right now. I ended up signing myself up to the Bootcamp 
        of University of Texas, Austin and met incredible teachers/mentors/and peers.
      </p>
      <p>
        My approach to all of my work is through growth mindset. Everything that I do is 
        always going to be a work in progress and I will be there to improve/update them. 
        I am a fast learner and hardworking individuals.
      </p>
    </div>
  );
}