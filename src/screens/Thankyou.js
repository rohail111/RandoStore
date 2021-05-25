import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Styles from '../helpers/Styles'
import Labels from '../helpers/Labels'

export default class Thankyou extends React.Component {

    constructor(props) {
        super(props)
    }

    goToHome = () =>{
        this.props.navigation.popToTop()
    }

    render() {
        return (
            <SafeAreaView style={Styles.SafeAreaViewStyle}>
                <ImageBackground source={require('../../images/background1.jpg')} style={Styles.ImageBackGroundStyle}>
                    <View style={Styles.CheckRoundView}>
                        <Ionicons name='checkmark-sharp' size={80} color='#fff' />
                    </View>
                    <Text style={[Styles.TitleText, { fontSize: 26 }]}>{Labels.thankYou}</Text>
                    <TouchableOpacity activeOpacity={Styles.activeOpacity} style={Styles.SubmitBtn}
                        onPress={this.goToHome}
                    >
                        <Text style={Styles.SubmitText}>{Labels.backToHome}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
