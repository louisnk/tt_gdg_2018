import React, { PureComponent } from 'react';
import { Field } from 'redux-form'

import Checkbox from '../../../Inputs/Checkbox';
import Typography from '../../../Typography';
import UnstyledLink from '../../../UnstyledLink/Link';
import {
  PropertyItem,
  PropertyDetail,
  DetailStack,
  // PropertyDetail,
  AgentDetail
} from './styles';

const P = Typography;

class Property extends PureComponent {
  handleClick = () => {
    console.log("clicked", this.props.propertyDetail.link)
  }

  handleSelect = () => {

  }

  render() {
    const {
      index,
      propertyDetail: {
        availability,
        description,
        id,
        mapSrc,
        imgSrc,
        link,
        location,
        price,
        specs,
        features: {
          available, propertyType, style,
          propertySqFt, livingSqFt,
          rentToBuy, longTerm, shortTerm,
          appliances, pets, furnished, utilities, children,
        },
      },
      agentInfo: {
        contact,
        name
      },
      onSelect,
      isSelected
    } = this.props;

    console.log("rendering ...")

    return (
      <PropertyItem>
        <P light color='#999'>{id}</P>
        <PropertyDetail>
          <UnstyledLink href={link} target="_blank">
            <img src={imgSrc} alt={`Image of property in ${location}`} />
            { name ? (<p>{name}</p>) : null }
          </UnstyledLink>
          <DetailStack>
            <P bold>{location}</P>
            <P>{specs.beds} Beds</P>
            <P>{specs.baths + (specs.halfBaths / 2)} Baths</P>
            <P>{specs.parking} Parking spots</P>
            { (availability || available)
              ? (<P>Available: {availability || available}</P>)
              : null
            }
            { propertyType ? (<P>Type: {propertyType}</P>) : null }
            <P>Sq. Ft: {(livingSqFt && livingSqFt.split('[')[0]) || '?'}</P>
          </DetailStack>
          <DetailStack>
            <P bold>${price.amount} {price.currency} / month</P>
            { style ? (<P>Style: {style}</P>) : null }
            <P color={`${furnished}` === 'No' ? '#f00' : '#111'}>Furnished: {furnished || 'No'}</P>
            <P>Utilities: {utilities || 'No'}</P>
            <P>Appliances: {appliances || 'No'}</P>
            <P>Pets: {pets || 'No'}</P>
            <P>Land Sq. Ft: {(propertySqFt && propertySqFt.split('[')[0]) || '?'}</P>
          </DetailStack>
          <Field
            component={Checkbox}
            name={`property-${id}`}
          />
        </PropertyDetail>
        <PropertyDetail>
          <P>{ description }</P>
        </PropertyDetail>
        <AgentDetail>
          <P>{contact}</P>
        </AgentDetail>
        <img src={mapSrc} />
      </PropertyItem>
    );
  }
}

export default Property;
