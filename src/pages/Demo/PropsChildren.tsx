import React, {useEffect} from "react";

function Container(props: any) {

    const ContainerProps = {
        name: 'alien',
        mes: 'let us learn react'
    }

    useEffect(() => {
        console.log('ContainerProps', ContainerProps)
    }, []);

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

/**
 * 这里介绍一下，为什么在Container组件中为item(ContainerProps)传递的是{  name: 'alien', mes: 'let us learn react' }，
 * 为什么显示的时候，name: 'haha'，而不是name: 'alien'
 * 先捋下流程就知道了，这里在Container组件的props.children会包含2个元素，一个是Child组件，一个是函数，
 * 组件通过React.cloneElement(item, {...ContainerProps})直接渲染了，
 * 函数是先为其传递了参数{  name: 'alien', mes: 'let us learn react' }，再返回到  {(ContainerProps: any) => <Child {...ContainerProps} name={'haha'}/>}，
 * 相当于把    const ContainerProps = {  name: 'alien', mes: 'let us learn react'  }赋值给了 {(ContainerProps: any) => <Child {...ContainerProps} name={'haha'}/>}，里面的ContainerProps，这时候ContainerProps就会有值了，
 * 值就是{  name: 'alien', mes: 'let us learn react' }，又因为为其传递了参数name={'haha'}，显式地设置了name为'haha'，这导致原来的name: 'alien'被覆盖，
 * 所以Child组件接受到的props就是{  "name": "haha",  "mes": "let us learn react" }，所以显示的name为haha。
 *
 * 总的来说，就是{(ContainerProps: any) => <Child {...ContainerProps} name={'haha'}/>}，这是一个函数，其中的ContainerProps是 item(ContainerProps)函数执行的时候Container组件为其提供的，
 * 后续的name: 'haha'覆盖了Container组件中传递的name: 'alien'。就这么简单
 *
 */

/**
 *
 * @param props
 * @constructor
 */
function Child(props: any) {

    useEffect(() => {
        console.log('props', props)
    }, []);

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
