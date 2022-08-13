import React from 'react';

export default function Portfolio() {

  const projectArr = [
    {
      name: 'My Food Planner',
      repository: 'https://github.com/TyeStanley/my-food-planner',
      deployed: 'https://tyestanley.github.io/my-food-planner/',
      image: 'my-food-planner.PNG'
    },
    {
      name: 'Next Exit',
      repository: 'https://github.com/TyeStanley/next-exit',
      deployed: 'https://next-exit.herokuapp.com/',
      image: 'next-exit.PNG'
    },
    {
      name: 'My Tech Blog',
      repository: 'https://github.com/TyeStanley/my-tech-blog',
      deployed: 'https://tech-blog-by-tye.herokuapp.com/',
      image: 'my-tech-blog.PNG'
    },
    {
      name: 'Weather Dashboard',
      repository: 'https://github.com/TyeStanley/weather-dashboard',
      deployed: 'https://tyestanley.github.io/weather-dashboard/',
      image: 'weather-dashboard.PNG'
    },
    {
      name: 'Run Buddy',
      repository: 'https://github.com/TyeStanley/run-buddy',
      deployed: 'run-buddy.PNG',
      image: 'run-buddy.PNG'
    },
    {
      name: 'Horiseon',
      repository: 'https://github.com/TyeStanley/horiseon-refactor',
      deployed: 'https://tyestanley.github.io/horiseon-refactor/',
      image: 'horiseon.PNG'
    }
  ]

  return (
    
    <div className="">
      <h2 className="">Portfolio Showcase</h2>
      <div className="d-flex flex-wrap justify-content-center">
      {
        projectArr.map(({ name, repository, deployed, image, index }) => (
          <div className="col-lg-6 col-sm-10" key={index}>
            <a href={deployed} target="_blank" rel="noreferrer">
              <h2>{name}</h2>
              <img className="projectArrMap"src={require(`../../assets/images/${image}`)} alt={name} />
            </a>
            <a href={repository} target="_blank" rel="noreferrer">
              <h4><u>Repository</u></h4>
              <p>{repository}</p>
            </a>
          </div>
        ))
      }
      </div>
    </div>
  )
}