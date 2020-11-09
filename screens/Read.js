import React from 'react';
import { Text,
         View,
         StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Read extends React.Component {

  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  checkBookEligibility = async() =>{
         const searchName = await db.collection('book').where("name", "==", this.state.search).get()
         if(bookRef.docs.length === 0){
              Alert.alert("Book is not avalabilable")
         }
         else{
             Alert.alert("Book is avalabilable")
         }
         return transactionType
    }

    render() {

      const { search } = this.state;

      return (
        <View style={styles.container}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
          <Text>Read</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08b8b8',
    justifyContent: 'center',
    alignItems: 'center'
  }
  });