import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PropertyList } from '../PropertyList';
import Typography from '../Typography';
import {
  getProperties,
  saveSelectedProperties
} from '../../redux/actions/properties';
import { propertySelector } from '../../redux/selectors/propertySelector';
import { PropertiesWrapper } from './styles'


class TopProperties extends Component {
  componentWillMount() {
    this.props.getProperties({
      pageSize: 50
    })
  }

  handleSelect = () => {
    console.log("party?")
    this.props.saveSelectedProperties();
  };

  handleClear = () => {
    console.log('clearing')
  };

  render() {
    const { data, saving } = this.props;

    return (
      <PropertiesWrapper>
        <Typography>Properties found: {data.length}</Typography>
        { saving
          ? <Typography>Saving...</Typography>
          : null
        }
        { data.length > 0
          ? <PropertyList
              properties={data}
              handleSubmit={this.handleSelect}

            />
          : null
        }
      </PropertiesWrapper>
    );
  }
}


TopProperties.propTypes = {
  data: PropTypes.array,
}

const mapDispatchToProps = {
  getProperties,
  saveSelectedProperties
};

export default connect(propertySelector, mapDispatchToProps)(TopProperties);
