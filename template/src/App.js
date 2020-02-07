import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="이듬(E.UID) 블렌디드 러닝" />
      <p>
        "이듬" 블렌디드 러닝이 지향하는 비전은 동반 성장에 있습니다. 강사에서 수강생으로 한 방향으로 흘러가는 지식 전달이 아닌, 함께
        공감하고, 이해하며 경험하는 교육 가치를 통해 공동의 혁신을 이끌어내는 것을 목표로 합니다.
      </p>
      <a
        className="App-link"
        href="https://yamoo9.github.io/EUID"
        target="_blank"
        rel="noopener noreferrer"
      >
        이듬(E.UID) 블렌디드 러닝
      </a>
    </header>
  </div>
);

export default App;
