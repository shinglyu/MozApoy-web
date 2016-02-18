import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DocumentMeta from 'react-document-meta';

import { Items } from 'components/Items';
import { AddItem } from 'components/AddItem';

/* actions */
import * as actionCreators from 'actions/items';

const metaData = {
  title: 'MozApoy - Result',
  description: 'Your smoke test suite',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.items,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Result extends Component {
  constructor(props) {
    super(props);
  }

  /*
   * state = {
      csv_url: null
  }
  */

  generateCsvUrl() {
      let text = this.props.items.map(obj => obj.text).join('\n');
      console.log(text)

      let data = new Blob([text], {type: 'text/csv'});

          // If we are replacing a previously generated file we need to
      // manually revoke the object URL to avoid memory leaks.
      // TODO: call revokeObjectURL when needed
      /*
      if (this.state.csv_url !== null) {
        window.URL.revokeObjectURL(this.state.csv_url);
      }
      */

      //this.setState({csv_url: window.URL.createObjectURL(data)});
      return window.URL.createObjectURL(data);
  }

  render() {
    let csv_url = this.generateCsvUrl();
    return (
      <section>
        <DocumentMeta {...metaData} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Your Smoke Test Suite
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <p>
                Here is a smoke test suite to get your QA activity up and running. You can remove unwanted tests and save it as a Excel file.
              </p>
              <a download="mozapoy_test_suite.csv" href={csv_url} className="btn btn-success">
              <span className="glyphicon glyphicon-download-alt"/>

              &nbsp;Download as Excel CSV
              </a>
              <Items {...this.props} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
