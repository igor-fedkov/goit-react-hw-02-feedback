import './App.css';
import { Component } from 'react';
import Feedback from './components/feedback';


class App extends Component {
  constructor(props) {
		super(props)

		this.state = {
			good: 0,
			neutral: 0,
			bad: 0
		}
  }
  
  onBtnClick = (event) => {
		const value = event.target.value;
		this.setState(prevValue =>
		{
			return {
				[value]: prevValue[value] + 1
			};
		});
	}

  render() {
    return (
      <div className="App">
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          onBtnClick={this.onBtnClick}
        />
      </div>
    );
  }
}

export default App;
