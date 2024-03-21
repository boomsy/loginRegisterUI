import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {View, StyleSheet, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import tw from 'twrnc'
import Animated, { FadeIn, FadeInUp, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

 

const LoginScreen = () => {

      const navigation = useNavigation()

      return (
            <View style={tw`bg-white h-full w-full`}>
                  <StatusBar style="light" />
                  <Image style={tw`h-full w-full absolute`} source={require('../assets/images/background.png')} />

                  {/* lights  */}

                  <View style={tw.style(`flex-row justify-around w-full absolute`)} >
                        <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify()}
                              style={ tw.style('h-[47] w-[19]') } 
                              source={require('../assets/images/light.png')} 
                        />
                        <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify()} 
                              style={tw`h-[55] w-[22]`} 
                              source={require('../assets/images/light.png')} 
                        />
                  </View>

                   {/* Title and form */}

                   <View style={tw.style(`h-full w-full flex justify-around pt-40 pb-10`)} >

                        <View style={tw.style(`flex items-center`)} >
                              <Animated.Text entering={FadeInUp.duration(1000).springify()}  style={tw.style(`text-white font-bold tracking-wider text-4xl`)} >
                                    Login 
                              </Animated.Text>
                        </View>

                        <View style={tw.style(`flex items-center mx-4 gap-y-4`)} >

                              <Animated.View entering={FadeInUp.duration(1000).springify()} style={tw.style(`bg-black/5 p-5 rounded-2xl w-full`)} >
                                    <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                              </Animated.View>

                              <Animated.View entering={FadeInUp.delay(400).duration(1000).springify()} style={tw.style(`bg-black/5 p-5 rounded-2xl w-full mb-3`)} >
                                    <TextInput placeholder='Password' placeholderTextColor={'gray'}  secureTextEntry />
                              </Animated.View>

                              <Animated.View entering={FadeInUp.delay(600).duration(1000).springify()} style={tw.style('w-full')}>
                                    <TouchableOpacity style={tw.style('w-full bg-sky-400 p-3 rounded-2xl mb-3')} >
                                          <Text style={tw.style('text-xl font-bold text-white text-center')} > 
                                                Login 
                                          </Text>
                                    </TouchableOpacity>
                              </Animated.View>

                              <Animated.View  entering={FadeInUp.delay(200).duration(1000).springify()} style={tw.style('flex-row justify-center')}>
                                    <Text> Don't have an account? </Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                          <Text style={tw.style('text-sky-600')} > 
                                                SignUp 
                                          </Text>
                                    </TouchableOpacity>
                              </Animated.View>
                        </View>

                   </View>
                  
            </View>
      );
}

const styles = StyleSheet.create({
   
})

export default LoginScreen;
