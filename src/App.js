import  React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import Youtube from './Components/Youtube';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';


 class App extends Component {

  constructor(props){
    super(props)

    
    this.state={
        videos:[]
    }

  }

  handleSubmit = async(searchTerm) =>{
     
    const response = await Youtube.get('search',{params:{part:'snippet',
    maxResults:10,
    key:'AIzaSyDW0mKRkFnWa26mvjazRlrBetmS3_IzhCI',
    q:searchTerm
}});
    

    console.log(response.data.items);


     var dataInformation = response.data.items;
  

   }

    render(){


        return(
            <>
             <Grid container spacing={10}>
                 <Grid item xs={12}>
                     <Grid container spacing={10}>

                         <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                         </Grid>

                        <Grid item xs={8}>
                         <VideoDetail />
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