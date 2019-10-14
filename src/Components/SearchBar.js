import React,{Component} from 'react';
import {Paper,TextField} from '@material-ui/core';



class SearchBar extends  Component {
 
   constructor(props){
     super(props)

    this.state ={
        searchTerm:''
    }

    //  this.handleSubmit = this.handleSubmit.bind(this);
    //  this.handChange = this.handChange.bind(this);
   }

   componentDidMount(){
            const {onFormSubmit} = this.props;
   

    onFormSubmit('youtube');

 
  }


  handleSubmit = (e) => {
     const {searchTerm} = this.state;
     const {onFormSubmit} = this.props;

     onFormSubmit(searchTerm);

     e.preventDefault();
  };


  handChange = (e) =>{
    
    this.setState({searchTerm:e.target.value})

    
   console.log(this.state);
  }


    render(){

        return(
         <>
         <Paper elevation={6} style={{padding:'25px'}}>
             <form onSubmit ={this.handleSubmit}>
                 <TextField fullWidth label="Search ..." onChange={this.handChange}/>

             </form>
         </Paper>

         </>
        )
    }


};


export default SearchBar;