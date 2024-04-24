import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RecursiveComponent from '@/components/RecursiveComponent'
import axios from 'axios'

const Page = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async function () {
            try {
                let { data } = await axios.get('https://pretty-banks-flash.loca.lt/home');
                setData(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    return <>{
        !!data.length ? <RecursiveComponent data={data} /> :
            (<View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Text>Loading....</Text>
            </View>)
    }</>
}

export default Page

const styles = StyleSheet.create({})