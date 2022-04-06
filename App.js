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
//import Signup from './Signup';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

  const App = ()=>{
return (<NavigationContainer>
<Stack.Navigator>

<Stack.Screen component={Main} name="Main" options={{headerShown:false}}/>
<Stack.Screen component={Home} name="Home"/>

</Stack.Navigator>


</NavigationContainer>

)
}

const Main=({navigation})=>{
return(




      <SafeAreaView>
        <ScrollView>
          <View style={{paddingTop:8}}>
          <View>
            <Text style={styles.Title}>Instagram</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Sign up to see photos and videos from your friends.
            </Text>
          </View>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
           
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
          <TouchableOpacity onPress={()=>Navigation.navigate('Home')}>
          <View >
          <Text style={styles.signup}>Sign up</Text>
          </View>

          </TouchableOpacity>
        
          <View style={{marginTop:1}}>
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
            <TouchableOpacity>
            <Text style={{paddingTop:70,fontWeight:'bold',fontSize:20,paddingRight:10,color:'#3483eb'}}>
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
    borderRadius:7,
    borderWidth:0.3,
    paddingLeft:150,
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
        marginLeft:80,
        alignSelf:'center',
        paddingTop:70,
        fontWeight:'bold',
        color:'black',
        //paddingBottom: 15
        
    
        },
        raj:{
         flexDirection:'row',
         paddingRight:100

        }

   


  

});
const Home = ()=>{
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
    <View >
    <Text style={style.login}>Login</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{alignSelf:'center',color:'grey',fontSize:15,fontWeight:'bold',paddingTop:12}}>
              OR              
      </Text>
      </View>
      <TouchableOpacity>
      <View style={style.container}>
      <Image source={require('./download.png')} style={style.fb}/>

     
        <Text style={style.log}>Log in with Facebook</Text>
      </View>
     
    </TouchableOpacity>
       
    <View>
        <Text style={{paddingTop:20,alignSelf:'center'}}>
          Forgot Password?
        </Text>
    
      </View>
      <View style={style.raj}>
      <Text style={style.acc}>
        Don't have an account? 
      </Text>
      <TouchableOpacity>
      <Text style={{paddingTop:70,fontWeight:'bold',fontSize:20,paddingRight:10,color:'#3483eb'}}>
        Sign up 
      </Text>
      </TouchableOpacity>
    </View>
    <View>
      <Text  style={{paddingTop:20,alignSelf:'center'}} >
        Get the app.
      </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <Image source={require('./AppStore.jpeg')} style={{height:180,width:220}}/>
      <Image source={require('./Play.png')}style={{ flex: 1,
    width: null,
    height: 200,
    //paddingTop:100,
    marginTop:10,
    resizeMode: 'cover'}}/>
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
    //fontFamily:''
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
      //position:'relative',
      //borderWidth:0.2,
      //borderRadius:5,
      //backgroundColor:'#3483eb',
      // textAlign:'center',
      alignSelf:'center',
      paddingLeft:50,
      paddingRight:50,
      paddingTop:10
    },
   fb:{ height:28,
    width:20,
   // paddingRight:10
        


   },
   log:{ paddingLeft:18,



   },



    login:{
     paddingTop:18,
     alignSelf:'center',
     fontSize:15,






    },
  
    acc:{
      fontSize:20,
      //marginTop:1,
      fontWeight:'bold',
      marginRight:5,
      marginLeft:80,
      alignSelf:'center',
      paddingTop:70,
      fontWeight:'bold',
      color:'black'
      
  
      },
      raj:{
       flexDirection:'row',
       paddingRight:100


      },
      /*Image:{
        flexDirection:'row',
        alignSelf:'center',
        //height:50,
        width:44,
        //alignItems:'center'
        




      }*/
  
  
    
    






  });


















export default App;







