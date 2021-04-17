import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image, Dimensions} from 'react-native';
import color from '../../../constants/color'
import { TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: color.WHITE}}>
        <View style={{marginHorizontal: 15, marginTop: 30}}>
          <Text style={{color: color.TEXT_PRIMARY, fontSize: 25,fontWeight: 'bold'}}>Hey Aryan,</Text>
          <Text style={{color: color.TEXT_SECONDARY, fontSize: 18,}}>Build your dream house</Text>
        </View>
        <View style={{marginHorizontal: 15, flexDirection: 'row', marginTop: 20 }}>
          <TextInput
            label=""
            mode="outlined"
            style={{backgroundColor: '#f3f4f5', flex: 4/5, marginRight: 5, }}
            theme={{ colors: { primary: color.THEME_ORANGE }, multiline: true }}
            value={this.state.searchText}
            placeholder={"Search for designers"}
            onChangeText={(text) => {this.setState({searchText: text})}}
        />
        <View style={{backgroundColor: color.WHITE, flex: 1/5, borderRadius: 10, elevation: 5, marginLeft: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Ionicons name='search' size={32} color={color.THEME_ORANGE} />
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 15}}>
          <View style={{flex: 1/3, backgroundColor: color.THEME_ORANGE, marginRight: 5, borderRadius: 5}}>
            <Text style={{color: color.WHITE, fontSize: 16, paddingVertical: 8, alignSelf:'center',}}>+ New</Text>
          </View>
          <View style={{flex: 1/3, backgroundColor: '#f2f3f4', marginHorizontal: 5, borderRadius: 5}}>
          <Text style={{color: color.TEXT_SECONDARY, fontSize: 16, paddingVertical: 8, alignSelf:'center',}}>History</Text>
          </View>
          <View style={{flex: 1/3, backgroundColor: '#f2f3f4', marginLeft: 5, borderRadius: 5}}>
          <Text style={{color: color.TEXT_SECONDARY, fontSize: 16, paddingVertical: 8, alignSelf:'center',}}>Cancelled</Text>
          </View>
        </View>
        <Text style={{marginHorizontal: 15, marginTop: 20, fontSize: 18, color: color.TEXT_PRIMARY, fontWeight: 'bold'}}>Our Works</Text>
        <View style={{marginTop: 20, flexDirection: 'row', marginHorizontal: 15}}>
          <View style={{flex: 1/2}}>
          <Image
            style={{width: DeviceWidth/2 - 30,height: 200, borderRadius: 5}}
            source={require('../../../assets/h1.jpg')}
          />
          <Text style={{color: color.TEXT_SECONDARY, fontSize: 17,fontWeight: 'bold', marginTop: 10}}>Villa Castle</Text>
          <Text style={{color: color.TEXT_SECONDARY, marginTop: 3}}>3 storeyed building made using cinema 4D</Text>
          </View>
          <View style={{flex: 1/2}}>
          <Image
            style={{width: DeviceWidth/2 - 30, height: 200, borderRadius: 5}}
            source={require('../../../assets/h2.jpg')}
           /> 
            <Text style={{color: color.TEXT_SECONDARY, fontSize: 17,fontWeight: 'bold', marginTop: 10}}>Villa Castle</Text>
            <Text style={{color: color.TEXT_SECONDARY, marginTop: 3}}>3 storeyed building made using cinema 4D</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 15, marginTop: 20}}>
        <Image
            style={{width: DeviceWidth - 30, height: 400, borderRadius: 10}}
            source={require('../../../assets/h3.jpg')}
           /> 
        </View>
    </ScrollView>
    );
  }
}

export default Dashboard;
const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height
