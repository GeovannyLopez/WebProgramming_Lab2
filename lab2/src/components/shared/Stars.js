import React from "react";
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


///function: Stars
///descripcion: Contains the list of stars
function Stars({ count }) {
    return (
        <div>
            {_.range(5).map(i => <FontAwesomeIcon icon="star" color={i < count ? '' : 'gray'} key={i} />)}
        </div>
    );
}

export default Stars;