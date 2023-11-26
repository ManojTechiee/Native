import { StyleSheet } from "react-native"
export const style=StyleSheet.create({
  home:{
    flex: 1,
    backgroundColor:"#fff",
    alignItems: 'center',
}, 
  wrap:{
    width:"80%",    
    gap:70,
    marginTop:100
    },
    Search:{
        borderWidth:1,
        height:25,
        flex:1,
        height:"100%",
        padding:10
    },
    searchwrap:{
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center"
    },
    cardwrap:{
    gap:10
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      trackingId: {
        fontSize: 16,
        marginBottom: 12,
      },
      status: {
        fontSize: 18,
        color: 'green',
      },
      text:{
        justifyContent:"center",  
        fontSize:20
      },
      noData:{
        justifyContent:"center",
        alignItems:"center"
      }
    })
    