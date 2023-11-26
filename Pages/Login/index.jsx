import { StyleSheet, Text, View , } from 'react-native';
import Button from '../../assets/Button';
import Input from '../../assets/Input';
import { styles } from './styles';
const Login =({ navigation })=>{
  
  const handleLogin = () => {
    navigation.navigate('Home');

  };

  return (
   <View style={styles.home}>
     <View style={styles.Login}>
      <View >
        <Text style={styles.header}>PIYOVI</Text>
      </View>
      <View style={styles.loginWrap}>
      <Input
      label="Email address"
      placeholder="Enter Your Email"
      />
      <Input
      label="Password"
      placeholder="Enter your Password"
      />  
      <Button
      label="Login"
      onPress={handleLogin}
      />

      </View>
    </View>
   </View>
  );
}

export default Login

