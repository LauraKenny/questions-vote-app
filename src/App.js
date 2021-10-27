import 'bulma/css/bulma.min.css';
import './App.css';
import Questions from './components/Questions';
import QuestionDetail from './components/QuestionDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/question/:questionId">
            <QuestionDetail />
          </Route>
          <Route path="/">
            <Questions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
