import { Component } from "react";
import moment from "moment";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class Vote extends Component {
  constructor(props) {
		super(props);
		this.state = {
            totalVotes: 0,
            springCount: 0,
            summerCount: 0, 
            fallCount: 0,
            winterCount: 0,
            updated: moment()
		};
	}

  handleClick1 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      springCount: this.state.springCount + 1,
      updated: moment()
		});
  }

  handleClick2 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      summerCount: this.state.summerCount + 1, 
      updated: moment()
		});
  }

  handleClick3 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      fallCount: this.state.fallCount + 1,
      updated: moment()
		});
  }

  handleClick4 = () => {
    this.setState({
      totalVotes: this.state.totalVotes + 1,
      winterCount: this.state.winterCount + 1,
      updated: moment()
		});
  }

  render() {
    return (
    <div>
          <h1>What is your favorite season?</h1>
          <br></br>
          <h2>Results:</h2>
          <p>Total Votes: {this.state.totalVotes}</p>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <p>Votes for Spring: {this.state.springCount}</p>
          <p>Votes for Summer: {this.state.summerCount}</p>
          <p>Votes for Fall: {this.state.fallCount}</p>
          <p>Votes for Winter: {this.state.winterCount}</p>
          </div>
          <br></br>
          <h2>Vote now:</h2>
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          <AwesomeButton onPress={this.handleClick1} type="primary" ripple>Spring</AwesomeButton>
          <AwesomeButton onPress={this.handleClick2} type="primary" ripple>Summer</AwesomeButton>
          <AwesomeButton onPress={this.handleClick3} type="primary" ripple>Fall</AwesomeButton>
          <AwesomeButton onPress={this.handleClick4} type="primary" ripple>Winter</AwesomeButton>
          </div>
          <br></br>
          <br></br>
          <p>Most recent vote submitted on {this.state.updated.toString()}</p>
    </div>)
  }
}

export default Vote