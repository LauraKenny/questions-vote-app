import { Link } from 'react-router-dom';
export default function Card({ question }) {
  return (
    <Link to={`${question.url}`}>
      <div className="card has-background-success-light">
        <div className="card-content">
          <div>
            <p className="title is-6">{question.question}</p>
            <time dateTime="2016-1-1">{question.published_at}</time>
            <p>Choices: {question.choices.length}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
