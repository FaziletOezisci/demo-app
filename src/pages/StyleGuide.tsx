import React from 'react';
import { Typography, Button } from '@mui/material';

export interface IStyleGuidePageProps {}

const StyleGuidePage: React.FunctionComponent<IStyleGuidePageProps> = (props) => {
    return (
        <div>
            <Typography variant="h1">This is a header 1</Typography>
            <Typography variant="h2">This is a header 2</Typography>
            <Typography variant="h3">This is a header 3</Typography>
            <Typography variant="h4">This is a header 4</Typography>
            <Typography variant="h5">This is a header 5</Typography>
            <Typography variant="h6">This is a header 6</Typography>
            <Typography variant="body1">this is a body 1</Typography>
            <Typography variant="body2">this is a body 2</Typography>
            <Typography variant="subtitle1">this is a subtitle 1</Typography>
            <Typography variant="subtitle2">this is a subtitle 2</Typography>
            <Button variant="outlined">This is a Button</Button>
        </div>
    );
};

export default StyleGuidePage;
