var Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.nextState}>
        <label>GitHub URL</label>
        <input type='text' />
        <button type='submit'>Submit</button>
      </form>
    )
  }
});

window.Form = Form;
