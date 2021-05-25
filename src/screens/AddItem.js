import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TextInput } from 'react-native-paper';
import { ContextStore } from '../helpers/Context'
import * as ItemService from '../services/Items'
import Styles from '../helpers/Styles'
import Labels from '../helpers/Labels'

export default class AddItem extends React.Component {

    static contextType = ContextStore;

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            imageUrl: '',
            nameErrorMsg: false,
            priceErrorMsg: false,
            imageUrlErrorMsg: false,
            loader: false
        }
    }

    Submit = async () => {
        try {
            const { name, price, imageUrl } = this.state
            if (name == '') {
                this.setState({
                    nameErrorMsg: true,
                    loader: false
                })
                return
            }
            if (price == '') {
                this.setState({
                    priceErrorMsg: true,
                    loader: false
                })
                return
            }
            if (imageUrl == '') {
                this.setState({
                    imageUrlErrorMsg: true,
                    loader: false
                })
                return
            }
            let response = await ItemService.addItems(name, price, imageUrl)
            if (response != undefined && response != null) {
                console.log("response =>", response)
                alert("item added successfully")
                this.setState({
                    loader: false,
                    name: '',
                    price: '',
                    imageUrl: '',
                })
            } else {
                this.setState({
                    loader: false
                })
                console.log('Error in addItems serive')
            }
        } catch (error) {
            this.setState({
                loader: false
            })
            console.log(error.message)
        }
    }

    goToCheckout = () => {
        this.props.navigation.navigate('Checkout')
    }

    goToAllItems = () => {
        this.props.navigation.navigate('AllItems')
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { name, price, imageUrl, nameErrorMsg, priceErrorMsg, imageUrlErrorMsg, loader } = this.state
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
                    <View style={Styles.AddItemView}>
                        <Text style={Styles.TitleText}>{Labels.putItemForSale}</Text>
                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#000',
                                    underlineColor: 'transparent',
                                    background: '#B4F3FC'
                                }
                            }}
                            mode='outlined'
                            style={Styles.TextInputStyle}
                            label="Item Name"
                            value={name}
                            onChangeText={(text) => this.setState({
                                name: text,
                                nameErrorMsg: false
                            })}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        {
                            nameErrorMsg == true &&
                            <Text style={Styles.ErrorMessage}>{Labels.itemCannotBeEmpty}</Text>
                        }
                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#000',
                                    underlineColor: 'transparent',
                                    background: '#B4F3FC'
                                }
                            }}
                            mode='outlined'
                            style={Styles.TextInputStyle}
                            label="Price"
                            value={price}
                            onChangeText={(text) => this.setState({
                                price: text,
                                priceErrorMsg: false
                            })}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        {
                            priceErrorMsg == true &&
                            <Text style={Styles.ErrorMessage}>{Labels.priceRequired}</Text>
                        }
                        <TextInput
                            theme={{
                                colors: {
                                    primary: '#000',
                                    underlineColor: 'transparent',
                                    background: '#B4F3FC'
                                }
                            }}
                            mode='outlined'
                            style={Styles.TextInputStyle}
                            label="Image Url"
                            value={imageUrl}
                            onChangeText={(text) => this.setState({
                                imageUrl: text,
                                imageUrlErrorMsg: false
                            })}
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                        {
                            imageUrlErrorMsg == true &&
                            <Text style={Styles.ErrorMessage}>{Labels.kindlyAddImageUrl}</Text>
                        }
                        <TouchableOpacity activeOpacity={0.6} style={Styles.SubmitBtn}
                            onPress={() => {
                                this.setState({
                                    loader: true
                                }, () => {
                                    this.Submit()
                                })
                            }}>
                            {
                                loader ?
                                    <ActivityIndicator
                                        size="small" color="#fff"
                                    />
                                    :
                                    <Text style={Styles.SubmitText}>{Labels.submit}</Text>

                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToAllItems}>
                            <Text style={Styles.ViewItemsText}>{Labels.viewItems}</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }
}