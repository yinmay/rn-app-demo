import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PropTypes from 'prop-types'
import DealItem from './DealItem'

class DealList extends Component {
    static propTypes={
        deals:PropTypes.array.isRequired,
    }
    render () {
        return (
            <View style={styles.list}>
            <FlatList
                data={this.props.deals}
                renderItem={({item, index}) => <DealItem deal={item} />}
            />
            </View>
        )
    }
}
 const styles= StyleSheet.create({
     list:{
         backgroundColor:'#eee',
         flex:1,
         width:'100%',
         paddingTop:50,
     },
     
 })

export default DealList