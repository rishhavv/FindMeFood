import React from 'react'
import { View , Text} from 'react-native'

 const ResultScreen = ({route}) => {
    //  console.log(navigation);
    //  const name = navigation.getParam('id', 'Peter');
    const { id } = route.params;
    console.log(id)
    return (
        <View>
            <Text>test</Text>
        </View>
    )
}

export default ResultScreen;
