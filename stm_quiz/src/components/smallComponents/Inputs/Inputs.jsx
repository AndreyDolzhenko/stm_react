import classes from "./Inputs.module.scss";

const Inputs = (props) => {

    return (
        <>
            <p><input className={classes.inputs} type="text" placeholder="ФИО"></input></p>
        </>
    );
}

export default Inputs;
