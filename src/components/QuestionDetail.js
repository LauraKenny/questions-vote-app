import { useParams } from 'react-router-dom';
import ChoiceCard from './ChoiceCard';
import { useEffect, useState } from 'react';

export default function QuestionDetail() {
  const [questionData, setQuestionData] = useState({});
  const [choices, setChoices] = useState([]);
  let { questionId } = useParams();

  useEffect(() => {
    const getQuestions = () => {
      const requestOptions = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      fetch(
        `https://polls.apiblueprint.org/questions/${questionId}`,
        requestOptions
      )
        .then(function (response) {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(function (data) {
          setQuestionData(data);
          setChoices(data.choices);
        });
    };
    getQuestions();
  }, [questionId]);

  return (
    <div className="main">
      <header>
        <h1 className="title is-1">Question Detail</h1>
      </header>
      <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column is-four-fifths">
          <h3 class="title is-4">Question: {questionData.question}</h3>
          {choices.map((choice, i) => {
            return <ChoiceCard key={i} choice={choice} />;
          })}
          <div class="button-container">
            <button class="button is-primary">Save Vote</button>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}
