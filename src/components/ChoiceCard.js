export default function ChoiceCard({ choice }) {
  console.log(choice);
  return (
    <div class="card">
      <div class="card-content">
        <div className="test">
          <div className="choice-text">{choice.choice}</div>
          <div className="choice-text">Votes: {choice.votes}</div>
          <div className="choice-text">35%</div>
        </div>
      </div>
    </div>
  );
}
