import "./graphbox.css";
import ShaiHulud from "../images/shaihulud.png";

function GraphBox({children}) {
  return(
    <div className="canvas">
      <img src={ShaiHulud} className="graphbox" />
    </div>
  );
}

export default GraphBox;
