import { View, Text, TextInput, Image, TouchableOpacity, Pressable } from 'react-native'
import React , {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import COLORS from '../constants/colors'
import { Ionicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import Button from '../components/Button'


const Login = ({navigation}) => {

     const [isPasswordShown, setIsPasswordShown]  = useState(false)
     const [isChecked, setIsChecked]              = useState(false)

      return (
            <SafeAreaView  style={tw.style('flex-1', {backgroundColor : COLORS.white})} >

                  <View style={tw.style('flex-1 mx-5')} >

                        <View style={tw.style('mt-5 mb-5')} >
                              <Text style={tw.style('text-4xl font-extrabold mt-3', {color : COLORS.black})}>
                                    Hey welcome back ! 
                              </Text>

                              <Text style={tw.style('text-base pl-1', {color : COLORS.black})}>
                                   Hello again you have been lissed!
                              </Text>
                        </View>


                        <View style={tw.style('px-2 py-5  border-t border-gray-200')} >

                              <View style={tw.style('mb-5 mt-3')} >
                                    <Text style={tw.style('text-base font-normal mt-1')}>
                                          Email adress 
                                    </Text>

                                    <View style={tw.style('w-full h-12 border-b border-gray-300 items-center justify-center pl-2')} >
                                          <TextInput 
                                                placeholder='Enter your email'
                                                placeholderTextColor={COLORS.gray}
                                                keyboardType='email-address'
                                          style={tw.style('w-full')}
                                          />
                                    </View>
                              </View>


                              <View style={tw.style('mb-5')} >
                                    <Text style={tw.style('text-base font-normal mt-1')}>
                                          Password 
                                    </Text>

                                    <View style={tw.style('w-full h-12 border-b border-gray-300 items-center justify-center pl-2')} >
                                          <TextInput 
                                                placeholder='Enter your password'
                                                placeholderTextColor={COLORS.gray}
                                                secureTextEntry = {!isPasswordShown}
                                          style={tw.style('w-full')}
                                          />

                                          <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown) }
                                                style={tw.style('absolute right-3')}>

                                                {
                                                      isPasswordShown == true ? (
                                                            <Ionicons name='eye' size={24} color={COLORS.black} aria-l={undefined} />
                                                      ) : (
                                                            <Ionicons name='eye-off' size={24} color={COLORS.black} aria-l={undefined} />
                                                      )
                                                }

                                          </TouchableOpacity>
                                    </View>
                              </View>


                              <View style={tw.style('flex-row my-2 ')}>
                                    <Checkbox 
                                          style={tw.style('mr-2')}
                                          value={isChecked}
                                          onValueChange={setIsChecked}
                                          color={isChecked ? COLORS.primary : undefined}
                                    />

                                    <Text  style={tw.style('text-sm')} > Remenber Me </Text>
                              </View>


                              <Button 
                                    title = "Login"
                                    filled
                                    style={tw.style('mt-10 mb-2 ')}             
                              />


                              <View  style={tw.style('flex-row items-center my-5 ')} >
                                    <View  style={ tw.style('flex-1 h-0.4 mx-2.5 ', {  backgroundColor : COLORS.gray}) }  />
                                    <Text  style={tw.style(' text-sm ')} > Or login                                 with </Text>
                                    <View  style={ tw.style('flex-1 h-0.4 mx-2.5 ', {  backgroundColor : COLORS.gray}) }  />
                              </View>


                              <View style={tw.style('flex-row justify-center mt-2')} >

                                    <TouchableOpacity
                                          onPress={() => console.log("Pressed")}
                                          style={tw.style('flex-row flex-1 items-center justify-center h-12 mr-1 rounded-lg', {borderWidth : 1, borderColor : COLORS.gray})} >

                                          <Image 
                                                source={require('../assets/images/facebook.png')}
                                                style={tw.style('h-8 w-8 mr-2')}
                                                resizeMode='contain'
                                          />     

                                          <Text> Facebook </Text>

                                    </TouchableOpacity>



                                    <TouchableOpacity
                                          onPress={() => console.log("Pressed")}
                                          style={tw.style('flex-row flex-1 items-center justify-center h-12 mr-1 rounded-lg', {borderWidth : 1, borderColor : COLORS.gray})} >

                                          <Image 
                                                source={require('../assets/images/google.png')}
                                                style={tw.style('h-8 w-8 mr-2')}
                                                resizeMode='contain'
                                          />     

                                          <Text> Google </Text>
                                    </TouchableOpacity>

                              </View>



                              <View style={tw.style('flex-row my-4.5 justify-center')} >
                                    <Text style={tw.style(' text-sm', { fontSize : 16,   color : COLORS.black})} > 
                                          D'ont have an account ? 
                                    </Text>

                                    <Pressable
                                          onPress={() => navigation.navigate("Signup")}>
                                          <Text style={tw.style('text-sm font-bold ml-2', { color : COLORS.primary})} > 
                                                Register 
                                          </Text>
                                    </Pressable>
                              </View>

                              

                        </View>

                  </View>
            
            </SafeAreaView>
      )
}

export default Login