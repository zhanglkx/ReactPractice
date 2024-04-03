function Container(props: any) {

    const ContainerProps = {
        name: 'alien',
        mes: 'let us learn react'
    }

    // 这种情况，在 Container 中， props.children 属性访问到是函数，并不是 React element 对象，针对这种情况，像下面这种情况下 children 是不能直接渲染的，直接渲染会报错。
    //   return  props.children

    // 方法 1
    // return  props.children(ContainerProps)
    // 方法二
    return (
        <div>
            容器类
            {props.children(ContainerProps)}
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
            {(ContainerProps:any) => <Child {...ContainerProps}  />}
        </Container>

    );
}


export default PropsChildren;
