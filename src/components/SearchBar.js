import React, { Component } from 'react';
import {  View, Text, TextInput,StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'


export default class SearchBar extends Component {
  static propTypes={
    searchDeals:PropTypes.func.isRequired,
  }
  state={
      searchTerm:'',
  }
  debouncedSearchDeals = debounce(this.props.searchDeals, 3000)
  handleChange=(searchTerm)=>{
    this.setState({searchTerm},()=>{
        this.debouncedSearchDeals(this.state.searchTerm)
    })
  }
  render() {
    return (
      <View >
        <TextInput style={styles.input}
        onChangeText={this.handleChange}
        placeholder={"Search"}/>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    input:{
        height:40,
        marginHorizontal: 12,
    }
})
