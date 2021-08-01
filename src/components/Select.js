import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function NativeSelects({ items, label, onChange }) {
    return (
        <FormControl size="small" variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
            <Select
                native
                onChange={onChange}
                label={label}
            >
                {items.map((item, index) => <option key={index} value={item.value}>{item.name}</option>)}
            </Select>
        </FormControl>
    );
}
NativeSelects.propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    items: PropTypes.array
}
export default NativeSelects;