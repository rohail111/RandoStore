import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    SafeAreaViewStyle: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    MainView: {
        borderWidth: 3, borderRadius: 6, width: '68%', justifyContent: 'center', alignItems: 'center'
    },
    HomeButtons: {
        marginTop: 20, flexDirection: 'row', height: 45, borderRadius: 5, width: 200, backgroundColor: '#235DA3', justifyContent: 'center', alignItems: 'center'
    },
    IconView: {
        width: '20%', alignItems: 'center'
    },
    LabelView: {
        width: '80%'
    },
    CartView: {
        justifyContent: 'center', alignItems: 'center', height: 18, width: 18, borderRadius: 30, backgroundColor: 'red', position: "absolute", top: 5, left: 24, zIndex: 10
    },
    CartButton: {
        flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', position: 'absolute', backgroundColor: 'black', zIndex: 2, height: 50, width: 100, borderTopLeftRadius: 50, borderBottomLeftRadius: 50, top: 15, right: 0
    },
    whiteColorText: {
        color: '#fff'
    },
    ImageBackGroundStyle: {
        height: '100%', width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    TitleText: {
        marginTop: 20, fontSize: 22, marginBottom: 45, fontWeight: 'bold'
    },
    BackBtnStyle: {
        justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: 'black', zIndex: 2, height: 35, width: 35, borderRadius: 50, top: 15, left: 15
    },
    AddItemView: {
        borderWidth: 2, borderRadius: 6, width: '90%', justifyContent: 'center', alignItems: 'center'
    },
    TextInputStyle: {
        width: '80%', marginTop: 10
    },
    ErrorMessage: {
        fontSize: 16, paddingVertical: 5, textAlign: 'left', color: 'red', width: '80%'
    },
    SubmitBtn: {
        marginTop: 20, width: '80%', marginBottom: 20, height: 45, borderRadius: 5, backgroundColor: '#235DA3', justifyContent: 'center', alignItems: 'center'
    },
    SubmitText: {
        fontSize: 18, color: '#fff'
    },
    ViewItemsText: {
        fontSize: 22, marginBottom: 20, fontWeight: 'bold'
    },
    FlatListStyle: {
        width: '90%'
    },
    FlatListMainView: {
        elevation: 3, marginVertical: 5, backgroundColor: 'lightblue', height: 100, borderRadius: 10, flexDirection: 'row'
    },
    ImageView: {
        width: '30%', justifyContent: 'center', alignItems: 'center'
    },
    FLImageStyle: {
        height: 80, width: 80, borderRadius: 80, borderWidth: 2, borderColor: '#235DA3'
    },
    FLTextStyle: {
        width: '50%', justifyContent: 'space-around'
    },
    NameText: {
        fontSize: 20, fontWeight: 'bold'
    },
    RupeesText: {
        fontSize: 16, fontWeight: 'bold'
    },
    AddDeleteView: {
        width: '20%'
    },
    AddDeleteViewBtn: {
        height: '100%', justifyContent: 'center', alignItems: 'center'
    },
    CheckoutBackGroundImage: {
        height: '100%', width: '100%',
    },
    SummeryView: {
        height: '25%', backgroundColor: '#59CDFC', borderTopWidth: 3, alignItems: 'center', justifyContent: 'space-between'
    },
    OrderSummeryLabel: {
        fontSize: 18, fontWeight: 'bold', marginTop: 10
    },
    SummeryInnerView: {
        flexDirection: 'row', justifyContent: 'flex-end', width: '100%'
    },
    TotalPriceView: {
        width: '75%'
    },
    PriceView: {
        width: '25%'
    },
    PriceLabel: {
        marginLeft: 10, textAlign: 'left', fontSize: 18, fontWeight: 'bold', marginTop: 10
    },
    TotalPriceLabel: {
        textAlign: 'right', fontSize: 18, fontWeight: 'bold', marginTop: 10,
    },
    NoItemsView: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    CheckoutFlatlistView: {
        height: '75%', alignItems: 'center' 
    },
    CheckRoundView: {
        height: 120, width: 120, borderRadius: 80, backgroundColor: '#31872E', justifyContent: 'center', alignItems: 'center'
    },
    CartIconSize: 25,

    activeOpacity: 0.5,
})
export default Styles