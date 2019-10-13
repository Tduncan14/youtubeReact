import  React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import Youtube from './Components/Youtube';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

 class App extends Component {



    render(){


        return(
            <>
             <Grid container spacing={16}>
                 <Grid item xs={12}>
                     <Grid container spacing={16}>

                         <Grid item xs={12}>
                          {/*Search bar */}
                         </Grid>

                        <Grid item xs={8}>
                           {/* Video detail */}
                        </Grid>

                        <Grid item xs={4}>
                            {/*video list */}
                        </Grid>
                     </Grid>

                 </Grid>

             </Grid>
            </>
        )
    }
 }



 // function app

//  const  App = () => {



//   };


 export default App;