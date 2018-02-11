import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ajax from './src/ajax'
import DealList from './src/components/DealList'
import DealDetail from './src/components/DealDetail'
import SearchBar from './src/components/SearchBar'
import {SafeAreaView} from 'react-navigation'


export default class App extends React.Component {
  state={
    deals:[],
    dealsFormSearch:[],
    currentDealId:null,
  }
  async componentDidMount(){
    const deals =  await ajax.fetchInitialDeals()
    this.setState( {deals})

  }
  searchDeals=async ()=>{
    let dealsFormSearch = []
    if(searchTerm){
      dealsFormSearch = await ajax.fetchDealsSearchResults(searchTerm)
    }
    this.setState({dealsFormSearch})
  }
  clearSearch = ()=>{
    this.setState({dealsFormSearch:[]})
  }
  setCurrentDeal=(dealId)=>{
    this.setState({
      currentDealId:dealId,
    })

  }
  unsetCurrentDeal=()=>{
    this.setState({
      currentDealId:null,
    })

  }
  CurrentDeal=()=>{
    return this.state.deals.find(
      (deal)=>deal.key === this.state.currentDealId
    )
  }
  render() {
    if(this.state.currentDealId){
      return (
        <SafeAreaView style={styles.main}>
          <DealDetail initialDealdata={this.CurrentDeal()}
            onBack={this.unsetCurrentDeal}
          />
        </SafeAreaView>
      )
    }
    const dealsToDisplay = this.state.dealsFormSearch.length>0?
    this.state.dealsFormSearch:this.state.deals;
    if(this.state.deals.length >0){
      return(
        <SafeAreaView style={styles.main}>
          <SearchBar searchDeals={this.searchDeals}/>
          <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal}/>
        </SafeAreaView>
      )

    }
    return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.header}>Open up App.js to start working on your app!</Text>
      </SafeAreaView>
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
  main:{
    marginTop:30,
  },
  header:{
    fontSize:40,
    marginHorizontal: 12,
  }
});
