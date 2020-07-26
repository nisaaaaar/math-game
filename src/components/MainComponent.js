import React,{Component} from 'react';
import {QUESTIONS} from '../shared/questions';
import Level from './LevelComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Play from './PlayComponent';
import {Link, Switch, Route, Redirect} from 'react-router-dom'
import { FadeTransform } from 'react-animation-components';


class Main extends Component{
	constructor(props){
		super(props);

		this.state ={
			questions : QUESTIONS
		};
	}
	 render(){

	 	const QuestionId = ({match}) =>{

	 		return(
                  <Play question={this.state.questions.filter(
                  	(question) => question.id === parseInt(match.params.questionId,10))[0]} 
                  />
              );
	 	}



		    return(
		        <div className="container-fluid backgrounding">
		          <div className="col-12">
		            <Link className="home-link" to="/home"><h1 className="main-header">MATH</h1></Link>
		          </div><hr/>
		          <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <div className="row mb-5">
		           			              
			              <Switch >
		                        <Route exact path='/home' component={Home} />
		                        <Route exact path='/home/play' component={() => <Play question={this.state.questions[0]} />} />
		                        <Route exact path="/home/level" component={() => <Level questions={this.state.questions} />} />
		                        <Route path="/home/level/:questionId" component={QuestionId} />
		                        <Redirect to="/home" />  
		                </Switch>
		           
       			  </div>
       			  </FadeTransform>

          <hr/>
		            <Footer />
		        </div>
		    );
	}
}

export default Main;