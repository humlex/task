import React from 'react';
import {Button} from "@material-ui/core";

const ButtonComponent = ({onClick, placeholder, disabled}: any) => <Button onClick={onClick} disabled={disabled} color='primary' size='large' variant='outlined' fullWidth={true}>{placeholder}</Button>

export default ButtonComponent;