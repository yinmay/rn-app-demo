import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import {priceDisplay } from '../util'
import ajax from '../ajax'

export default class DealItem extends Component {
    static propTypes={
        deals:PropTypes.object.isRequired,
        onBack:PropTypes.func.isRequired
    }
    state={
        deal:this.props.initialDealdata,
    }
    async componentDidMount() {
        const fullDeal = await ajax.fetchDealDetail(this.state.deal.key)
        // console.log(fullDeal)
        this.setState({
            deal:fullDeal,
        })
    }
    
  render() {
      const {deal} = this.state
    return (
      <View style={styles.deal}>
          <TouchableOpacity onPress={this.props.onBack}>
              <Text style={styles.backLink}>Back</Text>
          </TouchableOpacity>
          <Image source={{uri:deal.media[0]}}
            style={styles.image}/>
          <View style={styles.detail}>
            <Text style={styles.title}>{deal.title}</Text>
            
            <View style={styles.footer}>
                <View style={styles.info}>
                    <Text style={styles.cause}>{deal.cause.name}</Text>
                    <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
                </View>
            </View>

          
          {deal.user && (
                <View style={styles.user}>
                    <Image source={{uri:deal.user.avatar}} style={styles.avatar} />

                    <Text>
                        {deal.user.name}
                    </Text>
                </View>
          )}
        
         <View style={styles.description}>
             <Text>
                 {deal.description}
             </Text>
         </View>
         </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
    deal:{
        marginHorizontal: 12,
        // marginTop:50,
    },
    backLink:{
        marginBottom:5,
        color:'#22f'
    },
    image:{
        width:"100%",
        height:150,
        backgroundColor:'#ccc',
    },
    detail:{
        borderColor:'#bbb',
        borderWidth:1,
    },
    title:{
        fontSize:16,
        padding:10,
        fontWeight:'bold',
        marginBottom:5,
        backgroundColor:"rgba(237,149,45,0.7)"
    },
    footer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        marginTop:15,
    },
    cause:{
        flex:2
    },
    price:{
        flex:1,
        textAlign:'right'
    },
    avatar:{
        width:60,
        height:60,
    }
})