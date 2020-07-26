import React,{Component} from 'react';
import{Card, CardTitle,CardImg,CardImgOverlay} from 'reactstrap';
import { Link } from "react-router-dom";
import { FadeTransform } from 'react-animation-components';


	class Level extends Component{
	 render(){

	 	function RenderQuestion({question}){
	 		return( <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
		 			 <Card className="question-card rounded" onClick="">
		       			   <Link to={`/home/level/${question.id}`}>
					       <CardImg width="100%" src={question.image} />
					        <CardImgOverlay>
					          <CardTitle className="question-number">{question.id + 1}</CardTitle>  
					        </CardImgOverlay>
					       </Link>
					 </Card>
				</FadeTransform>
	 		);
	 	}

		  const questions = this.props.questions.map(question => {
		    return (
		      <div className="col-lg-3 col-md-5 col-sm-5 m-2 ml-5" key={question.id}>
		        <RenderQuestion question={question} />
		      </div>
		    );
  });

    return(
    	<div className="container">
    	<div className="row">
    		<h1 className="mt-4">Levels:</h1>
    	</div>
          <div className="row mt-4 level">{questions}</div>
    	</div>
    );
}
}

export default Level;