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
        videos:[],
        selectedVideo:null
    }

  }

  handleSubmit = async(searchTerm) =>{
     
    const response = await Youtube.get('search',{params:{part:'snippet',
    maxResults:5,
    key:'AIzaSyDW0mKRkFnWa26mvjazRlrBetmS3_IzhCI',
    q:searchTerm
}});
    

     this.setState({videos:response.data.items,
                    selectedVideo:response.data.items[0] });


     console.log(this.state);

   }

   onVideoSelect =( video) =>{

    this.setState({
        selectedVideo:video
    })



   }

    render(){


        return(
            <>
             <Grid container spacing={10}>
             <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                         </Grid>

                 <Grid item xs={8}>
                     <Grid container spacing={10}>

                         
                        <Grid item xs={8}>
                         <VideoDetail  Video ={this.state.selectedVideo}/>
                        </Grid>
                     </Grid>


                 </Grid>

                 <Grid item xs={4}>
                          <VideoList  List ={this.state.videos}  onVideoSelect={this.onVideoSelect} />


                        

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