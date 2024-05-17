import "./flappy_ornithopter.css"

import {Component, createRef} from 'react';

class FlappyOrnithopter extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = createRef(null);
    this.ctx = null;
    this.player = {
      x: 300,
      y: 300,
      vxl: 0,
      vxr: 0,
      vyu: 0,
      vyd: 0,
      isGrounded: false,
      width: 30,
      height: 30,
			fillColor: "red",
      draw: function(ctx) {
        this.x += this.vxl + this.vxr;
        this.y += this.vyu + this.vyd;
        if(this.x < 0)  {this.x = 0;}
        if(this.x > 610){this.x = 610;}
        if(this.y < 0)  {this.y = 0;}
        if(this.y > 450){this.y = 450;}
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x,this.y,this.width,this.height);
      }
    }
    setInterval(()=>this.update(),20);
  }

  handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        this.player.vyu = -10;
        break;
      case 'ArrowDown':
        this.player.vyd = 10;
        break;
      case 'ArrowLeft':
        this.player.vxl = -10;
        break;

      case 'ArrowRight':
        this.player.vxr = 10;
        break;
			case ' ':
				this.player.fillColor = (this.player.fillColor == "red")?"blue":"red";
				break;
      default:
        break;
    }
  };

  handleKeyUp = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        this.player.vyu = 0;
        break;

      case 'ArrowDown':
        this.player.vyd = 0;
        break;

      case 'ArrowLeft':
        this.player.vxl = 0;
        break;

      case 'ArrowRight':
        this.player.vxr = 0;
        break;
      default:
        break;
    }
  };

  update(){
    if(this.ctx != null){
      this.ctx.clearRect(0,0,640,480);
      this.player.draw(this.ctx);
    }
  }

  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext("2d");
    this.player.draw(this.ctx);
		window.addEventListener("keydown",  this.handleKeyDown);
		window.addEventListener("keyup",    this.handleKeyUp);
  }

  render() {
    return (<canvas id="game" ref={this.canvasRef} width="640" height="480" style={{ border:"5px solid green", backgroundColor:"white" }} ></canvas>);
  }
}

export default FlappyOrnithopter;
