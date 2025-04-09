import classes from "./Inputs.module.scss";

const Inputs = (props) => {

    console.log(props);

    return (
        
        <>
            <p><input className={classes.inputs} type="text" placeholder={props.placeStart} ></input></p>
        </>
    );
}

export default Inputs;
