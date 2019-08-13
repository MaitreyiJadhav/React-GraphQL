import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';



class Header extends Component{
render(){
    return(
<Typography style = {{textAlign: 'center'}} variant="h3" gutterBottom font-weight="bold">
        Rich People and Cars with graphQL
      </Typography> 

        
    )
}

}

export default Header
