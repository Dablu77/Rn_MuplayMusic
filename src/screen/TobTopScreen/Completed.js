import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../Components/ReusableComponets/Dimensions'
import Colors from '../../Components/utils/Colors'


export default function Completed({ navigation }) {

    const SrtData = [
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Lost',
            btrColor: '#e62e2d'



        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Won',
            btrColor: '#345bff'


        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Lost',
            btrColor: '#e62e2d'



        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Won',
            btrColor: '#345bff'
        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Lost',
            btrColor: '#e62e2d'
        },
        {
            PoolSize: '10,000',
            Reward: "5,000",
            Slots: "10,000",
            StartTime: "8 Pm",
            EndTime: '10 Am',
            Date: "04-Jan-2023",
            Generic: 'Garhwali',
            btrName: 'Won',
            btrColor: '#345bff'
        },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck }}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 30, }}>
                {SrtData.map((value, index) => (
                    <View
                        key={index}
                        style={{ height: heightPixel(120), marginTop: 20, marginHorizontal: 15, borderRadius: 10, backgroundColor: "#1D1D1D" }}>
                        <View style={{
                            flexDirection: 'row', justifyContent: "space-between",
                            paddingHorizontal: 15, backgroundColor: "#504F4F", paddingVertical: 5,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}>
                            <Text style={{ color: '#d3d3d3' }}>Opening At: 10 Am</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#d3d3d3', right: 6 }}>Generic:-</Text>
                                <Text style={{ color: "#d3d3d3" }}>Garhwali</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', paddingHorizontal: 15, top: 10, alignItems: 'center' }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: Colors.Withe, fontSize: fontPixel(18) }}>Pool Size:-</Text>
                                    <Text style={{ color: Colors.Withe, left: 10, fontSize: fontPixel(21) }}>10,000</Text>
                                </View>
                                <Text style={{ color: '#b4b4b4', fontSize: fontPixel(18) }}>#1028DE</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("EditSaveScreen")}

                                style={{ paddingVertical: 6, backgroundColor: value.btrColor, width: widthPixel(80), alignItems: 'center', borderRadius: 4 }}>
                                <Text style={{ color: Colors.Withe, }}>{value.btrName}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}