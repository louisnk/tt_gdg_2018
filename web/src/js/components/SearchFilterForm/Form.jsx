import React from 'react';
import PropTypes, { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form'

import C from '../../utility/constants';
import { FORM_SEARCH_FILTER } from '../../redux/constants';
import { Button } from '../Button';
import { FormWrapper, Label, LabeledField, Select } from './styles'


const SearchFilterForm = ({
  handleSubmit,
  handleReset,
  pristine,
  reset,
  submitting
}) => {
  const { CURRENCIES, LOCATIONS, PRICES } = C;

  const onSubmit = (e) => {
    e && e.preventDefault();
    console.log("submitting...")
    try {
      handleSubmit();
    } catch (e) {
      console.error(e)
    }
  }

  const onReset = (e) => {
    e && e.preventDefault();
    reset();
    handleReset();
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      <LabeledField>
        <Label>
          Min. Price
        </Label>
        <Field name='minPrice' component='select'>
          <option />
          {
            PRICES.map((price, i) =>
              (<option key={i} value={price}> {price} </option>))
          }
        </Field>
      </LabeledField>

      <LabeledField>
        <Label>
          Max Price
        </Label>
        <Field name='maxPrice' component='select'>
          <option />
          {
            PRICES.map((price, i) =>
              (<option key={i} value={price}>{price}</option>))
          }
        </Field>
      </LabeledField>

      <LabeledField>
        <Label>
          Currency
        </Label>
        <Field name='currency' component='select'>
          <option />
          {
            CURRENCIES.map((c, i) =>
              (<option key={i} value={c}>{c}</option>))
          }
        </Field>
      </LabeledField>

      <LabeledField>
        <Label>
          Location
        </Label>
        <Field name='location' component='select'>
          <option />
          {
            LOCATIONS.map((loc, i) =>
              (<option key={i} value={loc}>{loc}</option>))
          }
        </Field>
      </LabeledField>

      <Button disabled={pristine || submitting} onClick={onSubmit}>
        Submit
      </Button>
      <Button disabled={pristine || submitting} onClick={onReset}>
        Reset
      </Button>
    </FormWrapper>
  );
}

SearchFilterForm.propTypes = {
  handleSubmit: func.isRequired,
  handleReset: func.isRequired
}

export default reduxForm({
  form: FORM_SEARCH_FILTER
})(SearchFilterForm);
