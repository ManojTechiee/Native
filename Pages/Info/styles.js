import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
        main:{
            backgroundColor:"#fff",
            flex:1
        },
        statuswrap:{
         flexDirection:"row",
        marginHorizontal:30,
         height:85,
         alignItems:"center"
        },
        line:{
            width:2,
            height:"100%",
            backgroundColor:"lightgray",
            position:"relative",
            left:30
        },
        leftdata:{
            alignItems:"flex-end",
            position:"relative",
            left:1,
            gap:10
        },
        rightdata:{
            alignItems:"flex-start",
            gap:3,
            position:"relative",
            left:50,
            gap:10
        
        },
        dot: {
            width: 12,
            height: 12,
            borderRadius: 7,
            backgroundColor: "orange",
            position: "absolute",
            top: "30%",
            left: 30,
            transform: [{ translateX: -5 }, { translateY: -5 }],
          },
          date: {
            fontSize: 16,
            fontWeight: 'bold',
            color:"skyblue"
          },
          time: {
            fontSize: 14,
          },
           status: {
            fontSize: 18,
            fontWeight:"500"
        
          },
          location: {
            fontSize: 14,
            color:"gray"
          },
        });
        
        