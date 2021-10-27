import 'bulma/css/bulma.min.css';
import './App.css';
import Card from './components/Card.js';
import { useEffect, useState } from 'react';

export default function App() {
  const [questions, setQuestions] = useState([]);

  function formatQuestionRows(questionData) {
    const rows = [...Array(Math.ceil(questionData.length / 4))];
    return rows.map((row, i) => questionData.slice(i * 4, i * 4 + 4));
  }

  useEffect(() => {
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
          setQuestions(formatQuestionRows(data));
        });
    };
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
          {questions.map((row, i) => {
            return (
              <div className="columns" key={i}>
                {row.map((question, i) => {
                  return (
                    <div className="column is-one-quarter" key={i}>
                      <Card question={question} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
