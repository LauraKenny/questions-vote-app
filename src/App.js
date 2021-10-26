import 'bulma/css/bulma.min.css';
import './App.css';
import Card from './components/Card.js';
import { useEffect, useState } from 'react';

export default function App() {
  const [questions, setQuestions] = useState([]);

  const getQuestions = () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    fetch('https://polls.apiblueprint.org/questions', requestOptions)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(function (data) {
        setQuestions(data);
      });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="main">
      <header>
        <h1 className="title is-1">Questions</h1>
      </header>
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-four-fifths">
          <div className="columns">
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
            <div className="column">
              <Card />
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
