import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { Input, Select, DateTime, Button, Svg, Box, FormGroup, FormControl } from '../../../../';

const Filter = (props) => {
  const { name, filter , content, changeFilter } = props;

  //TODO: dynamic value from state

  const methods = {
    onChange({target}) {
      changeFilter(name, target.value);
    }
  }

	return (
  <Fragment>
    {filter.type === 'text'
      && (
        <Box is={FormGroup} mb="0">
          <Box
            is={FormControl}
            pr="35"
            placeholder="search"
            name="tableFilter"
            {...methods}
          />
          <Box is={Svg} c="#b3b3b3" icon={'search'} />
        </Box>
      )
    }
    {
      filter.type === 'date'
      && (
        <DateTime
          dateFormat="DD/MM/YYYY"
          placeholder="Date"
          icon="calendar"
          name="tableFilter"
          mb="0"
          {...methods}
        />
        )
    }
    {filter.type === 'time'
      && (
        <DateTime
          timeFormat="HH:MM:SS"
          placeholder="Time"
          icon="calendar"
          name="tableFilter"
          mb="0"
          {...methods}
        />
      )
    }
    {filter.type === 'select'
    && (
      <Select
        name="tableFilter"
        options={filter.options}
        align={'center'}
        Dstyle={'border'}
        w="100%"
        mb="0"
        {...methods}
      />
    )
    }
    {filter.type === 'button' && <Button danger onClick={filter.onClick}>{filter.name}</Button>}
  </Fragment>
  );
};

Filter.propTypes = {
	name: PropTypes.string.isRequired
};

export default Filter;
