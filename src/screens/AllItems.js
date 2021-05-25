import * as React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import * as ItemService from '../services/Items'
import UrlConstants from '../helpers/UrlConstants'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ContextStore } from '../helpers/Context'
import Styles from '../helpers/Styles'
import Labels from '../helpers/Labels'

var interval

export default class AllItems extends React.Component {
    static contextType = ContextStore;

    constructor(props) {
        super(props)
        this.state = {
            allItems: [],

        }
        this.getItems()
        this.getList()
    }

    componentWillUnmount() {
        clearInterval(interval)
    }

    getList = () => {
        interval = setInterval(() => {
            this.getItems()
        }, 5000);
    }

    getItems = async () => {
        try {
            let response = await ItemService.getAllItems()
            if (response != undefined && response.length > 0) {
                this.setState({
                    allItems: response
                })
                console.log(response)
            } else {
                console.log('Error in getAllItems Service')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    addItem = (item) => {
        var selectedItems = this.context.selectedItems
        var price = parseInt(item.price)
        selectedItems.push(item)
        this.context.setCount(this.context.count + 1)
        this.context.setTotalPrice(this.context.totalPrice + price)
        this.context.setSelectedItems(selectedItems)
    }

    renderItem = ({ item, index }) => {
        return (
            <View key={index} style={Styles.FlatListMainView}>
                <View style={Styles.ImageView}>
                    <Image
                        resizeMode='cover'
                        style={Styles.FLImageStyle}
                        source={{ uri: String(item.img).includes('./img/') ? UrlConstants.imagePhotoUrl + item.img : item.img }}
                    />
                </View>
                <View style={Styles.FLTextStyle}>
                    <Text style={Styles.NameText}>{item.name}</Text>
                    <Text style={Styles.RupeesText}>{Labels.rupees} {item.price}</Text>

                </View>
                <View style={Styles.AddDeleteView}>
                    <TouchableOpacity activeOpacity={0.6} style={Styles.AddDeleteViewBtn} onPress={() => this.addItem(item)}>
                        <Entypo name="squared-plus" size={35} color={'#235DA3'} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    goToCheckout = () => {
        this.props.navigation.navigate('Checkout')
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { allItems } = this.state
        return (
            <SafeAreaView style={Styles.SafeAreaViewStyle}>
                <TouchableOpacity activeOpacity={Styles.activeOpacity} style={Styles.BackBtnStyle}
                    onPress={this.goBack}
                >
                    <Ionicons name='arrow-back' size={25} color='#fff' />
                </TouchableOpacity>
                {
                    this.context.count > 0 &&
                    <TouchableOpacity activeOpacity={Styles.activeOpacity} style={Styles.CartButton}
                        onPress={this.goToCheckout}
                    >
                        <View style={Styles.CartView}>
                            <Text style={Styles.whiteColorText}>
                                {this.context.count}
                            </Text>
                        </View>
                        <Ionicons name={'cart'} size={Styles.CartIconSize} color={'#fff'} />
                        <Text style={Styles.whiteColorText}>
                            {Labels.rupees} {this.context.totalPrice}
                        </Text>
                    </TouchableOpacity>
                }
                <ImageBackground source={require('../../images/background1.jpg')} style={Styles.ImageBackGroundStyle}>
                    <Text style={[Styles.TitleText, { marginBottom: 25 }]}>{Labels.allItems}</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={Styles.FlatListStyle}
                        data={allItems}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
