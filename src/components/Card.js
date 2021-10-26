export default function Card({ question }) {
  return (
    <div className="card">
      <div className="card-content">
        <div>
          <p className="title is-4">What is your favourite animal?</p>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          <p>Choices: 3</p>
        </div>
      </div>
    </div>
  );
}
