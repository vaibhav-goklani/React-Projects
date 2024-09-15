function Button(props) {
    return (
        <button style={{backgroundColor: props.color}} onClick={() => props.action(props.color)}></button>
    )
}

export default Button
