import React,{Component} from 'react';
import{Button} from 'reactstrap';
import { Link } from "react-router-dom";

class Home extends Component{
	constructor(props){
		super(props);

		this.closeOpenedWindow = this.closeOpenedWindow.bind(this);
	}

	closeOpenedWindow(){
		window.close();
	}


	 render(){

    return(

        <div className="container">
          	<ul className="mainMenu list-unstyled">
          		<li>
          			<Link to = "/home/play" >        
		          		<Button outline className="menuButton">
		         			 <span className="fa fa-play" /><span className="fa ml-2">PLAY</span>
		       		    </Button>
	       		    </Link>
	       		 </li>
          		<li>
						<Link to = "/home/level" >          			
							<Button outline className="menuButton">
			         			 <span className="fa fa-list " /><span className="fa ml-2">LEVELS</span>
		         			</Button>
						</Link>	       		    
	       		 </li>
          		<li>        
	          		<Button outline className="menuButton">
	         			 <span className="fa fa-undo" /><span className="fa ml-2">RESTART</span>
	       		    </Button>
	       		 </li>
          		<li>        
	          		<Button outline className="menuButton" onClick={this.closeOpenedWindow}>
	         			 <span className="fa fa-times"/><span className="fa ml-2">EXIT</span>
	       		    </Button>
	       		 </li>
          	</ul>
          </div>
    );
  }
}

export default Home;