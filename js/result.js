var mockTestCaseData = [
  {
    id: "0001",
    text: "Login with correct username and password",
    priority: 1
  },
  {
    id: "0002",
    text: "Login with invalid username",
    priority: 2
  },
  {
    id: "0003",
    text: "Login with invalid password",
    priority: 3
  },
  {
    id: "0004",
    text: "Login with password that contains SQL-injection attack",
    priority: 4
  },
];

var Table = React.createClass({
  render: function() {
    var testcasesElems = this.props.testcases.map(function(testcase){
      return (
        <tr>
          <td> {testcase.id}       </td>
          <td> {testcase.text}     </td>
          <td> {testcase.priority} </td>
        </tr>
      )
    });

    return (
      <table>
        <tbody>
        <tr>
          <th> ID        </th>
          <th> Test Case </th>
          <th> Priority</th>
        </tr>
        {testcasesElems}
        </tbody>
      </table>
    )
  }
});

var Result = React.createClass({
  getInitialState: function(){
    return {
      totalTime: 60
    }
  },

  filterTestcaseByTotalTime: function(testcases, totalTime){
    var priority = totalTime / 30; //TODO: improve the algo
    return testcases.filter(function(tc){return tc.priority <= priority});
  },

  render: function() {
    return (
      <div>
        <p> You can use the slider to custmize the desired execution time.</p>
        <input type="range" min="30" max="120" step="30" defaultValue="60" 
               onChange={function(evt){this.setState({totalTime: evt.target.value})}.bind(this)}/>
        <label>Estimated Time: {this.state.totalTime} min</label>
        <Table testcases={this.filterTestcaseByTotalTime(mockTestCaseData,this.state.totalTime )} />
      </div>
    )
  }
});

window.Result = Result;
