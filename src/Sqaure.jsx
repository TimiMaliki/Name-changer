const Sqaure = ({colorValue,hexValue}) => {
  return (
    <section
    className="square"
    style={{backgroundColor:colorValue}}
    >
       <p>{colorValue ? colorValue : "Empty Value"}</p>
       <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}

Sqaure.defaultProps ={
    colorValue : "Empty color"
}

export default Sqaure