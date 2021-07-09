import React from 'react';
import {Button} from "@material-ui/core";

const ButtonComponent = ({onClick, placeholder}: any) => <Button onClick={onClick} color='primary' size='large' variant='outlined' fullWidth={true}>{placeholder}</Button>

export default ButtonComponent;