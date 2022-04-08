// In App.js in a new project
import React from 'react';
import {

  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,position,
  View,Image,
  TextInput,placeholder,secureTextEntry,
} from 'react-native';
import Forgot from './Forgot.js';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

  const App = ()=>{
return (<NavigationContainer>
<Stack.Navigator>

<Stack.Screen component={Main} name="Main" options={{headerShown:false}}/>
<Stack.Screen component={Home} name="Home"options={{headerShown:false}}/>
<Stack.Screen component={Forgot} name="Forgot" options={{headerShown:false}}/>

</Stack.Navigator>


</NavigationContainer>

)
}

const Home=({navigation})=>{
return(




      <SafeAreaView style={{marginBottom:20}}>
        <ScrollView>
          <View style={{paddingTop:5}}>
          <View>
            <Text style={styles.Title}>Instagram</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Sign up to see photos and videos from your friends.
            </Text>
          </View>
          <TouchableOpacity >
           
            <View style={styles.container}>
            <Image source={require('./download.png')} style={styles.fb}/>

           
              <Text style={styles.login}>Log in with Facebook</Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={{alignSelf:'center',color:'grey',fontSize:15,fontWeight:'bold',paddingTop:12}}>
                    OR              
            </Text>
             
          </View>
          <View>
            <TextInput keyboardType="email-address"  style={styles.place}
              placeholder='Mobile Number or Email'/> 
          </View>
          <View>
            <TextInput keyboardType="default"  style={styles.place}
              placeholder='Full Name'/> 
          </View>
          <View>
            <TextInput keyboardType="name-phone-pad"  style={styles.place}
              placeholder='Username'/> 
          </View>
          <View >
            <TextInput secureTextEntry={true}  style={styles.place} placeholder='Password'/>
          </View>
          <TouchableOpacity>
          <View>
          <Text style={styles.signup}>Sign up</Text>
          </View>

          </TouchableOpacity>
        
          <View style={{marginTop:1,alignSelf:'center'}}>
            <Text style={styles.term}>
              By signing up, you agree to our 
            </Text>
            <Text style={styles.pvt}>
               Terms & Privacy Policy
            </Text>

          </View>
          <View style={styles.raj}>
            <Text style={styles.acc}>
              Have an account? 
            </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Main')}>
            <Text style={{paddingTop:70,fontWeight:'bold',fontSize:20,color:'#3483eb'}}>
              Log in 
            </Text>
            </TouchableOpacity>
          </View>
          </View>
          
          </ScrollView>
      </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
  Title: {
  
    textShadowColor: 'black',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    color:'black',
    //fontFamily:''
  },
  text: {
    color: 'grey',
    paddingTop:10,
    paddingBottom:15,
    paddingLeft:10,
    marginLeft:20,
    paddingRight:20,
    textAlign:'center',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
    container:{
    flexDirection:'row',
    position:'relative',
    borderWidth:0.2,
    borderRadius:5,
    backgroundColor:'#3483eb',
    // textAlign:'center',
    alignSelf:'center',
    paddingLeft:50,
    paddingRight:50

    


  },
  
  login: {
    color:'white',
    margin:10,
    fontSize:20,
    alignSelf:'center',
    fontWeight:'bold',

    textAlign:'center',
  
  },

  fb:{
  height:30,
  width:30,
  marginLeft:10,
  marginTop:8,
  borderRadius:200,

  },
  place:{
   color:'#bfc8c9',
   fontSize:20,
   fontWeight:'bold',
   borderRadius:5,
   borderWidth:1.3,
   paddingLeft:10,
   paddingBottom:12,
   paddingTop:12,
   marginLeft:20,
   marginRight:20,
   marginTop:10,
   borderColor:'#bfc8c9'
   
  },
  signup:{
    textAlign:"center",
    borderRadius:7,
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

  },  
   term:{
    fontSize:20,
    //marginTop:0.2,
    paddingTop:10,
    //fontWeight:'bold',
    marginRight:50,
    marginLeft:60,

    },
    
    pvt:{
      fontSize:20,
      //marginTop:1,
      fontWeight:'bold',
      marginRight:40,
      marginLeft:35,
      alignSelf:'center'
  
      },
      acc:{
        fontSize:20,
        //marginTop:1,
        fontWeight:'bold',
        marginRight:5,
        //marginLeft:80,
        alignSelf:'center',
        paddingTop:70,
        fontWeight:'bold',
        color:'black',
        //paddingBottom: 15
        
    
        },
        raj:{
         flexDirection:'row',
         alignSelf:'center'

        }

   


  

});
const Main = ({navigation})=>{
return(

  <SafeAreaView>
  <ScrollView>
  
    <View>
      <Text style={style.Title}>Instagram</Text>
    </View>

    <View>
      <TextInput keyboardType="default"  style={style.place}
        placeholder='Phone Number, Username, or Email'/> 
    </View>
    <View >
      <TextInput secureTextEntry={true}  style={style.place} placeholder='Password'/>
    </View>
    <TouchableOpacity>
    <View>
    <Text style={style.Logo}>Login</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{alignSelf:'center',color:'grey',fontSize:18,fontWeight:'bold',paddingTop:12,paddingBottom:10}}>
              OR              
      </Text>
      </View>
      <TouchableOpacity>
      <View style={style.container}>
      <Image source={require('./download.png')} style={style.fb}/>

        <Text style={style.log}>Log in with Facebook</Text>
      </View>
     
    </TouchableOpacity>
     <TouchableOpacity onPress={()=> navigation.navigate('Forgot')}> 
    <View>
        <Text style={{paddingTop:20,alignSelf:'center',fontSize:20,color:'#3483eb',fontWeight:'bold'}}>
          Forgot Password?
        </Text>
        </View>
        </TouchableOpacity> 
      <View style={style.raj}>
      <Text style={style.acc}>
        Don't have an account? 
      </Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
      <Text style={{paddingTop:70,fontWeight:'bold',fontSize:22,paddingRight:10,color:'#3483eb'}}>
        Sign up 
      </Text>
      </TouchableOpacity>
    </View>
    <View>
      <Text  style={{alignSelf:'center',fontSize:20,fontWeight:'bold',color:'black',paddingTop:55}} >
        Get the app.
      </Text>
    </View>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
      <Image source={require('./both.png')} style={{height:84,width:310}}/>
     </View> 
       
  </ScrollView>
    </SafeAreaView>

);};

 const style = StyleSheet.create({
  Title: {
  
    textShadowColor: 'black',
    fontSize: 50,
    alignSelf: 'center',
    fontWeight: 'bold',
    color:'black',
  },
  place:{
    color:'#bfc8c9',
    fontSize:20,
    fontWeight:'bold',
    borderRadius:5,
    borderWidth:1.3,
    paddingLeft:10,
    paddingBottom:12,
    paddingTop:12,
    marginLeft:20,
    marginRight:20,
    marginTop:10,
    borderColor:'#bfc8c9'},
    container:{
      flexDirection:'row',
      alignSelf:'center',
      paddingLeft:50,
      paddingRight:50,
      paddingTop:10
    },
   fb:{ height:28,
    width:24,
   
   },
   log:{ paddingLeft:15,
    color:'#3483eb',
    fontSize:20,
   },
   Logo:{
    borderRadius:7, textAlign:'center',
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
   },
     acc:{
      fontSize:22,
      //marginTop:1,
      fontWeight:'bold',
      marginRight:5,
      marginLeft:50,
      alignSelf:'center',
      paddingTop:70,
      fontWeight:'bold',
      color:'black'
  
      },
      raj:{
       flexDirection:'row',
       //paddingRight:100,
       alignSelf:'center'


      },

  });


















export default App;







