import React, { Component } from 'react';

import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';

/* component styles */
import { styles } from './styles.scss';

export class StartForm extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    fields: React.PropTypes.object.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    //items: React.PropTypes.array,
    //addItem: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  state = {
    components:['Loading...']
  }

  componentDidMount() {
    //TODO: get this from AJAX
    //TODO: move this to container/Start
    this.setState({
      components:['User Login', 'User Account', 'User Access Control']
    })
  }

  /*handleSubmit = (data) => {
    alert(data)
    console.log(data)
    }
  */
  onAdd = (event) => {
    if (this.props.fields.name.value) {
      /* add item*/
      this.props.addItem(this.props.fields);

      /* reset form */
      this.props.dispatch(reset('addItem'));
    }
    event.preventDefault();
  };

  render() {
    const {
      fields: { giturl, components},
      handleSubmit, //some magic provided by redux-form
      onSubmit, //our onSubmit
    } = this.props;
    //const handleSubmit = this.handleSubmit
    console.log(giturl)

    return (
      <form className={styles} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>GitHub URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="https://www.github.com/your_name/your_repository"
            {...giturl}
          />
        </div>
        <div className="form-group">
          <label>Components</label>
          <select multiple {...components}>
          {this.state.components.map(name => (
            <option
              type="checkbox"
              value={name}
              key={name}
            >
            {name}
            </option>
          ))}
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-default" >
          Submit
          </button>
        </div>
      </form>
    );
  }
}

StartForm = reduxForm({
  form: 'Project Information',
  fields: ['giturl', 'components'],
  destroyOnUnmount: false,
})(StartForm);

export default StartForm;
