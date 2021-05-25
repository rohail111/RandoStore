import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ContextStore } from '../helpers/Context'
import Styles from '../helpers/Styles'
import Labels from '../helpers/Labels'

export default class HomeScreen extends React.Component {

    static contextType = ContextStore;

    constructor(props) {
        super(props)
    }

    goToItemsScreen = () => {
        this.props.navigation.navigate('AllItems')
    }

    goToAddItems = () => {
        this.props.navigation.navigate('AddItem')
    }

    goToCheckout = () => {
        if (this.context.count > 0) {
            this.props.navigation.navigate('Checkout')
        } else {
            alert('No item selected!')
        }
    }

    render() {
        return (
            <SafeAreaView style={Styles.SafeAreaViewStyle}>
                <StatusBar backgroundColor={'#4EC2F8'} barStyle='dark-content' />
                {
                    this.context.count > 0 &&
                    <TouchableOpacity activeOpacity={Styles.activeOpacity} style={Styles.CartButton} onPress={this.goToCheckout}>
                        <View style={Styles.CartView}>
                            <Text style={Styles.whiteColorText}>{this.context.count}</Text>
                        </View>
                        <Ionicons name={'cart'} size={Styles.CartIconSize} color={'#fff'} />
                        <Text style={Styles.whiteColorText}>{Labels.rupees} {this.context.totalPrice}</Text>
                    </TouchableOpacity>
                }
                <ImageBackground source={require('../../images/background1.jpg')} style={Styles.ImageBackGroundStyle}>
                    <View style={Styles.MainView}>
                        <Text style={Styles.TitleText}>{Labels.welcomeToRandoStore}</Text>
                        <TouchableOpacity activeOpacity={0.6} style={Styles.HomeButtons}
                            onPress={this.goToAddItems}>
                            <View style={Styles.IconView}>
                                <Ionicons name='add' size={25} color='#fff' />
                            </View>
                            <View style={Styles.LabelView}>
                                <Text style={Styles.whiteColorText}>{Labels.putItemForSale}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} style={Styles.HomeButtons}
                            onPress={this.goToItemsScreen}>
                            <View style={Styles.IconView}>
                                <Ionicons name='search' size={25} color='#fff' />
                            </View>
                            <View style={Styles.LabelView}>
                                <Text style={Styles.whiteColorText}>{Labels.browseOurItems}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} style={[Styles.HomeButtons, { marginBottom: 35 }]}
                            onPress={this.goToCheckout}>
                            <View style={Styles.IconView}>
                                <Ionicons name='checkmark' size={25} color='#fff' />
                            </View>
                            <View style={Styles.LabelView}>
                                <Text style={Styles.whiteColorText}>{Labels.checkout}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView >
        );
    }
}
