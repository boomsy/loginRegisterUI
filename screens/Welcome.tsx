import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import tw from 'twrnc'
import COLORS from '../constants/colors'
import Button from '../components/Button'



const Welcome = ({navigation}) => {
  return (
    <LinearGradient  style={tw`flex-1`} colors={[COLORS.secondary, COLORS.primary]} >
            <View>

                  <Image 
                        source={require("../assets/images/hero1.jpg")} 
                        style={tw.style( 'rounded-2xl h-25 w-25 top-5 absolute',
                              { transform : [  {translateX: 20}, {translateY: 50},{rotate: "-15deg"},] } 
                        )}
                  />

                  <Image 
                        source={require("../assets/images/hero3.jpg")} 
                        style={tw.style( 'rounded-2xl h-25 w-25 -top-4 left-25 absolute',
                              { transform : [  {translateX: 50}, {translateY: 50},{rotate: "-5deg"},] } 
                        )}
                  />

                  <Image 
                        source={require("../assets/images/hero3.jpg")} 
                        style={tw.style( 'rounded-2xl h-25 w-25 top-35 -left-12 absolute',
                              { transform : [  {translateX: 50}, {translateY: 50},{rotate: "15deg"},] } 
                        )}
                  />


                  <Image 
                        source={require("../assets/images/hero2.jpg")} 
                        style={tw.style( 'rounded-2xl h-50 w-50 top-25 left-25 absolute',
                              { transform : [  {translateX: 50}, {translateY: 50},{rotate: "-15deg"},] } 
                        )}
                  />

           
                  {/* -------- Content ------- */}


                  <View style={tw.style('px-6 absolute top-100 w-full')}>

                        <Text style={tw.style('text-5xl font-extrabold ', {color : COLORS.white})}>
                              Let's Get 
                        </Text>

                        <Text style={tw.style('text-4xl font-extrabold ', {color : COLORS.white})}>
                              Started 
                        </Text>


                        <View style={tw.style('py-6')}>
                              <Text style={tw.style('text-xl py-1 ', {color : COLORS.white})}>
                                    Connect with each other with chatting 
                              </Text>
                              <Text style={tw.style('text-xl', {color : COLORS.white})}>
                                    Calling, Enjoy Safe and private texting
                              </Text>
                        </View>



                        <Button 
                              onPress={() => navigation.navigate("Signup") }
                              title="Join Now" 
                              style={{ marginTop: 80, width: "100%" }} 
                        />


                        <View style={tw.style('flex-row mt-3 justify-center')} >

                              <Text style={tw.style('text-lg', {color : COLORS.white})} > 
                                    Already have an account ? 
                              </Text>
                              <Pressable
                                onPress={() => navigation.navigate("Login")}>
                                    <Text style={tw.style('text-xl font-extrabold ml-2', {color : COLORS.white})} > 
                                          Login 
                                    </Text>
                              </Pressable>

                        </View>


                  </View>

            </View>

    </LinearGradient>
  )
}

export default Welcome