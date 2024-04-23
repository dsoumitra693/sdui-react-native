import React, { useState } from 'react'
import { component_map } from '@/components'
import { StyleSheet, Text, View } from 'react-native'

const RecursiveComponent = () => {
    const data = [{
        component: "default_view",
        name: "container",
        styles: {
            flex: 1,
            backgroundColor: "red",
            width: 360,
            height: 100
        },
        children:[{
            component:"default_text",
            name:"heading",
            styles:{
                color:"#fff",
                fontSize:20,
            },
            content:"Hello"
        }]
    }]

    return data.map(item => {
        const Component = component_map[item.component]
        return (<Component key={item.name} styles={item.styles}>
            {item?.content}
            {item.children && <RecursiveComponent data={item.children} />}
        </Component>)

    })
}

export default RecursiveComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "red"
    },
})