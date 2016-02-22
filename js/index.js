var App = React.createClass({
  getInitialState: function() {
    return {
      step: 0
    }

  },
  nextState: function(evt){
    evt.preventDefault();
    this.setState({step: this.state.step + 1});
  },
  render: function() {
    console.log(this.state.step)
    if (this.state.step == 0) {
      return <Form nextState={this.nextState}/>
    }
    else if (this.state.step == 1){
      console.log(Result)
      return <Result />
    }
    else {
      return <div>Unknown State: {this.state.step} </div>
    }
  }
});


ReactDOM.render(
  <App content={"Hello world"} />,
  document.getElementById('container')
);
