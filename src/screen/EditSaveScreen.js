import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet, LogBox } from 'react-native'
import React, { createRef, useRef, useState } from 'react'
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors'
import { fontPixel, heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions'
import ActionSheet from 'react-native-actions-sheet';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist'
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



export default function EditSaveScreen({ navigation }) {
    const actionSheetRef = createRef(false);

    const toggleBottomNavigationView = () => {
        actionSheetRef?.current?.setModalVisible(true);
    };

    const SrtData = [

        {
            Nmae: 'janam',
        },
        {
            Nmae: 'janam',
        },
        {
            Nmae: 'janam',
        },
        {
            Nmae: 'janam',
        },
        {
            Nmae: 'janam',
        },
        {
            Nmae: 'janam',
        },
        {
            Nmae: 'janam',
        }, {
            Nmae: 'janam',
        },




    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck }}>
            <Header
                height={heightPixel(30)}
                width={widthPixel(30)}
                Image={require('../assets/leftarrow2.png')}
                onePressIcone={() => navigation.navigate("Notifications")}
                onPress={() => navigation.goBack('')} />

            <View style={{ marginHorizontal: 30, marginVertical: 15 }}>
                <Text style={{ fontSize: fontPixel(27), color: Colors.Withe, }}>#BLJHFY123</Text>
                <Text style={{ fontSize: fontPixel(18), color: Colors.Withe, top: 3 }}>3 Min Left</Text>
            </View>
            <View>
                <Text style={{ color: Colors.Lightgrey, paddingHorizontal: 25, fontWeight: '500' }}>
                    model released in 2020 that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues the prompt
                </Text>
            </View>
            <View style={{ marginTop: 5, }}>
                <Text style={{ textAlign: 'center', color: Colors.Withe, fontWeight: '500', fontSize: fontPixel(23) }}>
                    Your Play List
                </Text>
            </View>
            <DraggableFlatList
                data={SrtData}
                renderItem={({ item, index, move, moveEnd, isActive }) => {
                    return (
                        <View
                            key={item}
                            style={{ justifyContent: 'center', height: heightPixel(60), backgroundColor: "#1D1D1D", marginVertical: 10, marginHorizontal: 15, borderRadius: 50, top: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={toggleBottomNavigationView}
                                    >

                                        <Image source={require('../assets/man2.png')} style={{ height: heightPixel(35), width: widthPixel(30), resizeMode: 'cover', borderRadius: 4 }} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: fontPixel(22), color: Colors.Withe, paddingLeft: 12 }}>1</Text>
                                    <View style={{ alignItems: 'center', }}>
                                        <Text style={{ fontSize: fontPixel(20), color: Colors.Withe, paddingLeft: 10 }}>Janam janam</Text>
                                        <Text style={{ fontSize: fontPixel(10), color: Colors.Lightgrey }}>Aditya,preeti (Bluered)</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/playbuttonarrowhead.png')} style={{ height: heightPixel(25), width: widthPixel(25), right: 10 }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onLongPress={move}
                                        onPressOut={moveEnd}>
                                        <Image source={require('../assets/hamburger.png')} style={{ height: heightPixel(30), width: widthPixel(30), }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>



                    )
                }}
                keyExtractor={(item, index) => `draggable-item-${item.key}`}
                scrollPercent={5}
            //   onMoveEnd={({ data }) => this.setState({ data })}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 20, marginTop: 15 }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack("")}

                    style={{ marginRight: 20, borderRadius: 2, alignItems: 'center', paddingVertical: 7, backgroundColor: Colors.Chinesepurple, width: widthPixel(70) }}>
                    <Text style={{ color: Colors.Withe, fontWeight: '500', }}>Exit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MyPoolScreen")}

                    style={{ borderRadius: 2, alignItems: 'center', paddingVertical: 7, backgroundColor: Colors.Chinesepurple, width: widthPixel(70) }}>
                    <Text style={{ color: Colors.Withe, fontWeight: '500', }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, marginHorizontal: 15, alignItems: 'center' }}>
                <Text style={{ color: Colors.Lightgrey, }}>
                    Generative Pre-trained Transformer 3 is an autoregressive language model
                    Generative Pre-trained Transformer 3 is an autoregressive language model

                </Text>
            </View>
            {/* <ScrollView

                contentContainerStyle={{ paddingBottom: 30, marginTop: 10 }}>
                {SrtData.map((Value, index) => (
                    <TouchableOpacity
                        onPress={toggleBottomNavigationView}

                        key={index}
                        style={{ justifyContent: 'center', height: heightPixel(60), backgroundColor: "#1D1D1D", marginVertical: 10, marginHorizontal: 15, borderRadius: 50 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../assets/man2.png')} style={{ height: heightPixel(35), width: widthPixel(30), resizeMode: 'cover', borderRadius: 4 }} />
                                <Text style={{ fontSize: fontPixel(22), color: Colors.Withe, paddingLeft: 12 }}>1</Text>
                                <View style={{ alignItems: 'center', }}>
                                    <Text style={{ fontSize: fontPixel(20), color: Colors.Withe, paddingLeft: 10 }}>Janam janam</Text>
                                    <Text style={{ fontSize: fontPixel(10), color: Colors.Lightgrey }}>Aditya,preeti (Bluered)</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <TouchableOpacity>
                                    <Image source={require('../assets/playbuttonarrowhead.png')} style={{ height: heightPixel(25), width: widthPixel(25), right: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={toggleBottomNavigationView}
                                >
                                    <Image source={require('../assets/hamburger.png')} style={{ height: heightPixel(30), width: widthPixel(30), }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 20, marginTop: 15 }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack("")}

                        style={{ marginRight: 20, borderRadius: 2, alignItems: 'center', paddingVertical: 7, backgroundColor: Colors.Chinesepurple, width: widthPixel(70) }}>
                        <Text style={{ color: Colors.Withe, fontWeight: '500', }}>Exit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("MyPoolScreen")}

                        style={{ borderRadius: 2, alignItems: 'center', paddingVertical: 7, backgroundColor: Colors.Chinesepurple, width: widthPixel(70) }}>
                        <Text style={{ color: Colors.Withe, fontWeight: '500', }}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20, marginHorizontal: 15, alignItems: 'center' }}>
                    <Text style={{ color: Colors.Lightgrey, }}>
                        Generative Pre-trained Transformer 3 is an autoregressive language model
                        Generative Pre-trained Transformer 3 is an autoregressive language model

                    </Text>
                </View>
            </ScrollView> */}

            <ActionSheet
                ref={actionSheetRef}
                containerStyle={{
                    height: heightPixel(850), borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    backgroundColor: "#202128"

                }}
                // indicatorColor={"red"}
                headerAlwaysVisible
                closeOnPressBack
                gestureEnabled
                indicatorStyle={{ height: 0 }}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => actionSheetRef?.current?.setModalVisible(false)}
                        style={{ marginHorizontal: 15, }}>
                        <Image source={require('../assets/crossbutton.png')} style={{ height: heightPixel(30), width: widthPixel(30) }} />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ color: Colors.Withe, fontSize: fontPixel(28), fontWeight: '500', marginTop: 10 }}>Janam janam</Text>
                        <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', height: heightPixel(120), width: widthPixel(120), backgroundColor: '#9839', borderRadius: 100 }}>
                            <Image source={require('../assets/man2.png')} style={{ height: heightPixel(120), width: widthPixel(120), borderRadius: 100, resizeMode: 'contain', }} />
                        </View>
                        <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), fontWeight: '500', marginTop: 20 }}>
                            Aditya Preeti
                        </Text>
                        <Text style={{ color: Colors.Withe, fontSize: fontPixel(24), fontWeight: '500', marginTop: 10 }}>
                            Director Name
                        </Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>Produer:</Text>
                            <Text style={{ color: Colors.Lightgrey, paddingLeft: 30, fontSize: fontPixel(18), }}>Manish</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginTop: 15 }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>Label Name:</Text>
                            <Text style={{ color: Colors.Lightgrey, paddingLeft: 30, fontSize: fontPixel(18), }}>Manish Kumar</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginTop: 15 }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>Release Date:</Text>
                            <Text style={{ color: Colors.Lightgrey, paddingLeft: 30, fontSize: fontPixel(18), }}>12-03-2023</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginTop: 15 }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>Platfrom:</Text>
                            <Text style={{ color: Colors.Lightgrey, paddingLeft: 30, fontSize: fontPixel(18), }}>Youtube</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginTop: 15 }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>Averge views channel:</Text>
                            <Text style={{ color: Colors.Lightgrey, paddingLeft: 30, fontSize: fontPixel(18), }}>120k</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginTop: 15 }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>IMDB Rating:</Text>
                            <Text style={{ color: Colors.Lightgrey, paddingLeft: 30, fontSize: fontPixel(18), }}>5 Star</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginHorizontal: 50, marginTop: 15, alignItems: 'center', }}>
                            <Text style={{ color: Colors.Withe, fontSize: fontPixel(20), }}>YouTube Link:</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#1028DE", paddingLeft: 30, fontSize: fontPixel(20), }}>Click Here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ActionSheet>



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA',
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: heightPixel(850),
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    containerStyle: {
        height: 20
    }
});