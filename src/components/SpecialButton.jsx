const SpecialButton = (props) => {
    return (
        <button className={ "special-btn " + props.bgColor + "-bg" }>{ props.value }</button>
    );
};

export default SpecialButton;