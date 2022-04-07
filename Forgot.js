import React from 'react';
import{
Text,
TextInput,
View,
StyleSheet,
ScrollView,
SafeAreaView,
Image,
TouchableOpacity,
Button

} from 'react-native';
const Forgot = ({navigation}) => {
    return (
        <View>
        <SafeAreaView>
         <ScrollView>
          <View>
            <Text style={styles.Title}>Instagram</Text>
          </View>
          <Image source={require('./lock.png')} style={{alignSelf:'center',height:90,width:90,marginTop:50}}/>
        <Text style={{alignSelf:'center',fontSize:18,fontWeight:'bold',color:'black',paddingTop:9}}>
           Trouble Logging in?
         </Text>
         <View>
         <Text style={{alignSelf:'center',fontSize:14,paddingTop:12,padding:17}}>
         Enter your Email, Username, Or Phone and we will
         </Text>
         <Text style={{alignSelf:'center',}}>
         send you link to get back into your account.
         </Text>
         </View>
         <View >
             <TextInput placeholder='Email, Phone or Username' keyboardType='default' style={styles.place}/>
         </View>
         <TouchableOpacity>
         <View>
           <Text style={styles.login}>
               Send Login Link
           </Text>    
         </View>
         </TouchableOpacity>
         <View>
             <Text style={{alignSelf:'center',fontSize:12,fontWeight:'bold',padding:15}}>
                 OR
             </Text>
             <Text style={{alignSelf:'center',fontWeight:'bold',color:'black'}}>Create new account</Text>
         </View>
         <View style={{margin:132}}>

         <Button title='Back to Login' onPress={()=>navigation.navigate('Home')} />

         </View>
        



         </ScrollView>
         </SafeAreaView>
         </View>

);};
 const styles= StyleSheet.create
({ Title: {
          
    textShadowColor: 'black',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    color:'black',},


    place:{ padding:12,
        borderWidth:1,
        borderRadius:5,
        color:'grey',
        fontSize:15,
        fontWeight:'bold',
        margin:20,
        
    



    },
    login:{ borderRadius:7, textAlign:'center',
    borderWidth:0.3,
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:12,
    marginBottom:10,
    paddingTop:12,
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    backgroundColor:'#3483eb',
    color:'white'
    


    }










})





export default Forgot;