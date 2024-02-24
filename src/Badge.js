import { MDBBadge } from 'mdb-react-ui-kit'
import React from 'react'

function Badge({children,styleInfo}) {

    const colorKey={
        Fashion:"primary" ,
        Travel:"secondary",
        Food:"danger",
        Tech:"warning",
        Sports:"dark"    
    }


  return (
    <div>
        <h5 style={styleInfo}>
            <MDBBadge color={colorKey[children]}>
                {children}
            </MDBBadge>
        </h5>
    </div>
  )
}

export default Badge