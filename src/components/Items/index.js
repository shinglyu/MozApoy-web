import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class Items extends Component {

  static propTypes = {
    items: React.PropTypes.array,
    delItem: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onDelete = (event) => {
    event.preventDefault();
    const index = event.currentTarget.dataset.index;
    this.props.delItem(index);
  };

  render() {
    const { items } = this.props;

    return (
      <div className={styles}>
        {!items.length && <span>Array is empty</span>}
        {
          items.map((item, index) =>
            <div className="checkbox" key={index}>
              <label>
                <span className="glyphicon glyphicon-remove"
                  data-index={index}
                  onClick={this.onDelete}
                />
                &nbsp;&nbsp;&nbsp;{`${item.text}`}
              </label>
            </div>
          )
        }
        </div>
    );
  }
}
