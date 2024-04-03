import React from "react";

function Container(props: any) {

    const ContainerProps = {
        name: 'alien',
        mes: 'let us learn react'
    }

    // 这种情况，在 Container 中， props.children 属性访问到是函数，并不是 React element 对象，针对这种情况，像下面这种情况下 children 是不能直接渲染的，直接渲染会报错。
    //   return  props.children


    /**
     * 这种方式作用是：
     *
     * 1 根据需要控制 Children 渲染与否。
     * 2 可以将需要传给 Children 的 props 直接通过函数参数的方式传递给执行函数 children 。
     */
    // 方法 1
    // return  props.children(ContainerProps)
    // 方法二
    return (
        <div>
            容器类
            {/*{props.children(ContainerProps)}*/}
            {props.children.map((item: any) => {
                if (React.isValidElement(item)) {
                    return React.cloneElement(item, {...ContainerProps})
                } else if (typeof item === 'function') {
                    return item(ContainerProps)
                } else {
                    return null
                }
            })}
        </div>
    )
}

function Child(props: any) {
    return (
        <div>
            子类
            <div>hello, my name is {props.name} </div>
            <div> {props.mes} </div>
        </div>
    )
}

function PropsChildren() {
    return (
        <Container>
            <Child/>
            {(ContainerProps: any) => <Child {...ContainerProps} name={'haha'}/>}
        </Container>

    );
}


export default PropsChildren;
