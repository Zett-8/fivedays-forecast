import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    return (
        <Sparklines data={props.data} height={200}>
            <SparklinesLine color={props.color} />
            <SparklinesReferenceLine type='avg' />
        </Sparklines>
    );
}