import React from 'react'
import { component_map } from '@/components'
import { StyleSheet } from 'react-native'

const RecursiveComponent = ({ data }) => {

    const render = data.map(item => {
        const Component = component_map[item.component]
        return (<Component key={item.name} {...item.props}>
            {item?.content}
            {item.children && <RecursiveComponent data={item.children} />}
        </Component>)

    })

    console.log(render)
    return render
}

export default RecursiveComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "red"
    },
})