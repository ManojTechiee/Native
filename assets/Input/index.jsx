import { TextInput,View,StyleSheet,Text } from "react-native"

const Input=({label,placeholder,onChangeText})=>{
    return(
        <View>
            {label && <Text style={Styles.label}>{label}</Text>}            
            <TextInput
            placeholder={placeholder}
            style={Styles.input}
            onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input


const Styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
    },
    label:{
        fontSize:15,
        marginBottom:8
    },
    input:{
        borderWidth:2,
        borderRadius:5,
        paddingHorizontal:10,
        paddingVertical:3,
        
    }
})