import { useParams } from 'react-router-dom';

export default function QuestionDetail() {
  let { questionId } = useParams();
  return <div>Question details for question {questionId}</div>;
}
