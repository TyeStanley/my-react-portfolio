import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p className="m-4">You can download my resume by clicking "My Resume" </p>
      <a className="btn btn-primary" href='src\assets\resumePDF\myResume.pdf' download>
        My Resume
      </a>
      <div>
        <h4 className="mt-4">My Developer Proficiencies</h4>
        <ul>
          <li className="mt-4">JavaScript</li>
          <li className="mt-1">React</li>
          <li className="mt-1">Express</li>
          <li className="mt-1">MongoDB</li>
          <li className="mt-1">Node</li>
          <li className="mt-1">MySql</li>
          <li className="mt-1">Many Others...</li>
        </ul>
      </div>
      
    </div>
  )
}