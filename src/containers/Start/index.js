import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { Items } from 'components/Items';
import { AddItem } from 'components/AddItem';
import { StartForm } from 'components/StartForm';

/* actions */
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'MozApoy - Getting Started',
  description: 'Getting started',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.items, //mapStateToProps
  //dispatch => bindActionCreators(actionCreators, dispatch) //mapDispatchToProps
  dispatch => ({onSubmit: (data) => (console.log(data))}),
)
export class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Getting started
              </h1>
              <p>Please tell us about your project so we can provide you customized test suites</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <StartForm {...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
