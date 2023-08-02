const Sqaure = ({colorValue}) => {
  return (
    <section
    className="sqaure"
    style={{backgroundColor:colorValue}}
    >
       <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  )
}

Sqaure.defaultProps ={
    colorValue : "Empty color"
}

export default Sqaure