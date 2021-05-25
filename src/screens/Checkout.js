import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StatusBar, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ContextStore } from '../helpers/Context'
import UrlConstants from '../helpers/UrlConstants'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from '../helpers/Styles'
import Labels from '../helpers/Labels'

export default class Checkout extends React.Component {

    static contextType = ContextStore;

    constructor(props) {
        super(props)
        this.state = {
            addedItems: []
        }

    }

    componentDidMount() {
        this.setState({
            addedItems: this.context.selectedItems
        })
    }

    removeItems = (item, index) => {
        try {
            const { addedItems } = this.state
            var selectedArray = addedItems
            if (item.name == selectedArray[index].name) {
                selectedArray.splice(index, 1)
                this.context.setCount(this.context.count - 1)
                this.context.setTotalPrice(this.context.totalPrice - parseInt(item.price))
                this.context.setSelectedItems(selectedArray)
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    checkout = () => {
        this.props.navigation.navigate('Thankyou')
        setTimeout(() => {
            this.context.setCount(0)
            this.context.setTotalPrice(0)
            this.context.setSelectedItems([])
        }, 100);
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
                    <TouchableOpacity activeOpacity={0.6} style={Styles.AddDeleteViewBtn} onPress={() => this.removeItems(item, index)}>
                        <MaterialIcons name="delete" size={35} color={'#d10101'} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { addedItems } = this.state
        return (
            <SafeAreaView style={Styles.SafeAreaViewStyle}>
                <TouchableOpacity activeOpacity={Styles.activeOpacity} style={Styles.BackBtnStyle}
                    onPress={this.goBack}
                >
                    <Ionicons name='arrow-back' size={25} color='#fff' />
                </TouchableOpacity>
                <ImageBackground source={require('../../images/background1.jpg')} style={Styles.CheckoutBackGroundImage}>
                    {
                        this.context.count == 0 ?
                            <View style={Styles.NoItemsView}>
                                <Text style={Styles.TitleText}>{Labels.noItems}</Text>
                            </View>
                            :
                            <>
                                <View style={Styles.CheckoutFlatlistView}>
                                    <Text style={[Styles.TitleText, { marginBottom: 20 }]}>{Labels.checkout}</Text>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        contentContainerStyle={Styles.FlatListStyle}
                                        data={addedItems}
                                        renderItem={this.renderItem}
                                        keyExtractor={item => Math.random()}
                                    />
                                </View>
                                <View style={Styles.SummeryView}>
                                    <Text style={Styles.OrderSummeryLabel}>{Labels.orderSummery}</Text>
                                    <View style={Styles.SummeryInnerView}>
                                        <View style={Styles.TotalPriceView}>
                                            <Text style={Styles.TotalPriceLabel}>{Labels.totalPrice}</Text>
                                        </View>
                                        <View style={Styles.PriceView}>
                                            <Text style={Styles.PriceLabel}>{Labels.rupees} {this.context.totalPrice}</Text>
                                        </View>

                                    </View>
                                    <TouchableOpacity activeOpacity={Styles.activeOpacity} style={Styles.SubmitBtn}
                                        onPress={this.checkout}
                                    >

                                        <Text style={Styles.SubmitText}>{Labels.checkout}</Text>

                                    </TouchableOpacity>
                                </View>
                            </>
                    }
                </ImageBackground>
            </SafeAreaView>
        );
    }
}
