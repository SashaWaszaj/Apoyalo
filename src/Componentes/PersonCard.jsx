


const PersonCard = (props) => {
    return (
        <>
        <h3> {props.nombre} </h3>
        <p> Edad: {props.edad}</p>
        <p> Color de pelo: {props.colorPelo}</p>
        </>
    );
}

export default PersonCard;