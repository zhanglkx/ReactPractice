

function Container(props:any) {

    const  {children} = props;

    return (
        <div>
            容器类
            {children}
        </div>
    )
}

function Child() {
    return (
        <div>
            子类
        </div>
    )
}

function PropsChildren() {
    return (
        <Container>
            <Child/>
        </Container>

);
}


export default PropsChildren;
