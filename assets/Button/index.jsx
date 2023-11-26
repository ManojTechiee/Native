import { TouchableOpacity , View ,Text , StyleSheet} from "react-native";

const Button=({label,onPress})=>{
    return(
            <TouchableOpacity onPress={onPress} style={Styles.container}>
            <Text style={{color:"white"}}>{label}</Text>
            </TouchableOpacity>
    )
}

export default Button


const Styles=StyleSheet.create({
    container:{
        backgroundColor:"rgb(235, 119, 63)",
        alignItems:"center",
        borderColor:"rgb(235, 119, 63)",
        borderWidth:5,
        paddingVertical:8,
        borderRadius:20,
        paddingHorizontal:8
    },
})