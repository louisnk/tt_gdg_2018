import React, { Component, Fragment as F } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import LazyLoading from '../../components/LazyLoading'
// import TopProperties from '../../components/TopProperties'
import { getProperties } from '../../redux/actions/properties';
import { appSelector } from '../../redux/selectors/appSelector';
import { ExampleWithError } from '../../components/Example';
import { ErrorBoundary } from '../../components/Utilities';


const LazyExample = Loadable({
  loader: () => import('../../components/Example/Example'),
  loading: LazyLoading,
})

const mapStateToProps = appSelector;

const mapDispatchToProps = {
  getProperties,
};

@connect(mapStateToProps, mapDispatchToProps)
class ExampleView extends Component {
  componentDidMount() {
    this.props.getProperties();
    console.log("hello", this.props.loading)
  }

  render() {
    return (
      <F>
        { this.props.loading
          ? <Loader />
          : <TopProperties />
        }
        <ErrorBoundary>
          <ExampleWithError {...this.props} />
        </ErrorBoundary>
      </F>
    )
  }
}

ExampleView.propTypes = {
  app: PropTypes.object,
}

export default ExampleView;
