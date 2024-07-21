export default function InfoComp(props) {
    console.log(props);
  
    return (
      <li className="tests">
        <p>
          <strong>{props.title}</strong> {props.description}
        </p>
      </li>
      
    )
  }