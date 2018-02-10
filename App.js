import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ajax from './src/ajax'
import DealList from './src/components/DealList'

export default class App extends React.Component {
  state={
    deals:[],
  }
  async componentDidMount(){
    const deals =  await ajax.fetchInitialDeals()
    this.setState((prevState)=>{
      return {deals}
    })
    console.log(deals)
  }
  render() {
    return (
      <View style={styles.container}>
      {this.state.deals.length>0 ?
        <DealList deals={this.state.deals} />
        : <Text style={styles.header}>Open up App.js to start working on your app!</Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{

  }
});
