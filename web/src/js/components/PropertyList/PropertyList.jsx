import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

import { FORM_PROPERTY_LIST } from '../../redux/constants';
import { Button } from '../Button';
import { Property } from './components/Property'
import { ListWrapper, PropertyUL } from './styles'


class PropertyList extends Component {
  onSubmit = (e, form) => {
    e && e.preventDefault();
    console.log("submit")
    this.props.handleSubmit();
  };

  onReset = (e) => {
    e && e.preventDefault();
    this.props.reset();
    // this.props.handleReset();
  };

  render() {
  	const {
      properties,
      pristine,
      submitting
    } = this.props;

    console.log(this.props)

    return (
      <ListWrapper onSubmit={this.onSubmit}>
        <Button type="submit" disabled={pristine || submitting}>
          Save
        </Button>
        <Button disabled={pristine || submitting} onClick={this.onReset}>
          Clear
        </Button>
      	<PropertyUL>
      		{
      			properties.map((p, i) =>
      				(<Property {...p} key={i} />)
      			)
	      	}
      	</PropertyUL>
      </ListWrapper>
    );
  }
}

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  // handleReset: PropTypes.func.isRequired,
}

export default reduxForm({
  form: FORM_PROPERTY_LIST
})(PropertyList);
