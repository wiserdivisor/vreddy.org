import "./skillcard.css";

function SkillCard(props) {
  return(

    <div className="skillcard">
      <img className="skillimg" src={props.img}></img>
      <p>{props.title}</p>
      <hr/>
      <sub>
        {props.sub}
      </sub>
    </div>

  );
}

export default SkillCard;
