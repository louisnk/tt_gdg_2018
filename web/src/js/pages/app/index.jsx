import React, { Component, Fragment as F } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loader from '../../components/Loader'
import { TopProperties } from '../../components/TopProperties'
import { SearchForm } from '../../components/SearchFilterForm'
import { getInitialData } from '../../redux/actions/app';
import { getSearchProperties } from '../../redux/actions/properties';
import { initialDataSelector } from '../../redux/selectors/appSelector';
import { ExampleWithError } from '../../components/Example';
import { ErrorBoundary } from '../../components/Utilities';


class HomePage extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getInitialData();
    }, 500)
  }

  updateSearch = () => {
    this.props.getSearchProperties();
  }

  render() {
    const { loading } = this.props;

    return (
      <F>
        <SearchForm
          handleSubmit={this.updateSearch}
          handleReset={this.updateSearch}
        />
        { loading ? <Loader /> : <TopProperties /> }
        <ErrorBoundary>
          <ExampleWithError {...this.props} />
        </ErrorBoundary>
      </F>
    )
  }
}


HomePage.propTypes = {
  app: PropTypes.object,
}

const mapDispatchToProps = {
  getInitialData,
  getSearchProperties,
};

export default connect(initialDataSelector, mapDispatchToProps)(HomePage);
