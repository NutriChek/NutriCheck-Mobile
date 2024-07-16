import React from "react";
import tw from "@/lib/tailwind";
import { View, Image, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Oauth(){
    return (
        <View>
            <Text style={tw`pt-8 pb-5 self-center text-[12px] font-bold text-black/50`}>or continue with</Text>
            <View style={tw`flex-row`}>
            <Pressable style={tw`px-6`}>
                <Ionicons 
                name="logo-facebook" 
                size={40}
                color={tw.color("black/50")}
                />
            </Pressable>
            
            <Pressable style={tw`px-6`}>
                <Ionicons 
                name="logo-apple" 
                size={40}
                color={tw.color("black/50")}
                />
            </Pressable>
            <Pressable style={tw`px-6`}>
                <Ionicons 
                name="logo-google" 
                size={40}
                color={tw.color("black/50")}
                />
            </Pressable>
            </View>
        </View>
    );
}