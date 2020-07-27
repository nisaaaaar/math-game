import React,{Component} from 'react';
import{Button, Modal, ModalBody} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import {Control,LocalForm } from 'react-redux-form';
import { Link } from "react-router-dom";


class Play extends Component{
	constructor(props){
		super(props);

        this.state = {
        	answers : "",
        	isModalOpen : false 
        } 
	    this.toggleModal = this.toggleModal.bind(this);
      this.handleClick = this.handleClick.bind(this);
	}
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    handleClick(values){

    	const answer = this.props.question.answer;

    		if(JSON.stringify(values) === answer)
    	  		this.toggleModal();
    	  	else
            alert('WRONG ANSWER!!!!!');
}

	 render(){

	 	const RenderQuestion = ({question}) =>{
	 		return(
				    	<div className="container mt-5" key={question.id}>
				    		<FadeTransform
				                in
				                transformProps={{
				                    exitTransform: 'scale(0.5) translateY(-50%)'
				                }}>
				                <div className="container">
				          		<h2 className="question"> QUESTION{' '}{question.id + 1} </h2>	
				    		</div>
				    		<div className="container">
					          	<h3 className="question"> {question.question}</h3>
					         </div>
				                 <LocalForm onSubmit={(values) => this.handleClick(values)} autocomplete="off">
								   		<div className="row">
								   			<div className="col-4 offset-md-5">
									   			<Control.text model=".answers" id="answers" name="answers"
					                                        placeholder="ENTER THE ANSWER"
					                                        className="answers mt-5"
					                             />
				                            </div>
								    	</div>
								    	<div className="row">
								          	<div className="col-md-6 offset-md-5">
								          		<Button outline type="submit" className="answerButton mt-5 ml-4" >
										         	<span className="fa fa-tick" /><span className="fa ml-2">CHECK ANSWER</span>
									         	</Button>
								          	</div>
								        </div>
								   </LocalForm>
					       </FadeTransform>
				    	</div>
	 			);
	 	}
    return(
    	<React.Fragment>
		    	<RenderQuestion question={this.props.question} />

				   <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} className="answerModal">
		                <ModalBody>
		                    <p className="answer">CORRECT ANSWER!!</p>
		                     {(this.props.question.id+1) == 8 ? 
		                     	<Link to={`/home`}>
									<Button className="answer" type="submit" value="submit" color="dark" >Next Question</Button>
		                  	    </Link>		                     	:
		                     	<Link to={`/home/level/${this.props.question.id + 1}`}>

									<Button className="answer" type="submit" value="submit" color="dark" >Next Question</Button>
		                         </Link>
		                }
		                </ModalBody>
		            </Modal>
    	    </React.Fragment>

    );
	}
}

export default Play;