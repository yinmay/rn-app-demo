const apiHost = 'Https://bakesaleforgood.com'
//'https://facebook.github.io/react-native/movies.json'
//            return responseJson.movies;


export default{
    async fetchInitialDeals(){
        try {
            let response = await fetch(apiHost + '/api/deals');
            let responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
          }
    }
}