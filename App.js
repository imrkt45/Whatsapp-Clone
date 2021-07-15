import React from 'react';
import { Text, View, Image } from 'react-native';


const App = () => {
  return (

    <View style={{ backgroundColor: "#020f09", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ marginBottom:10, height:70, width: "100%",paddingHorizontal:10, backgroundColor: "#2f3030", flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
        <View style={{ flexDirection:"row",justifyContent:"space-between",flex:1}}>
          <Text style={{ fontWeight: "bold", fontSize: 20,color:"white" }}>WhatsApp</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 15,color:"white" }}>search</Text>
            <View>
              <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: "white" }}>
              </View>
              <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: "white", marginVertical: 3 }}>
              </View>
              <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: "white" }}>
              </View>

            </View>

          </View>
        </View>
      </View>
      <View style={{ flex: 1, width: "96%", }}>

        <View
          style={{ flexDirection: "row", }}
        >
          <View style={{ marginRight: 10, width: 50, height: 50, borderRadius: 25, overflow: "hidden", justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>Raj Kumar Tiwari</Text>
              <Text style={{ color: "green" }}>online</Text>

            </View>
            <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
              <Text style={{ color: "#c9c5b9",width:"90%" }}>fdkfwjfofnefn,mnjrogjebewojrqopwjebfdnfsfijewjehfnwjophejhfiifeii</Text>
              <View style={{height:16,width:16,borderRadius:8,backgroundColor:"green",justifyContent:"center",alignItems:"center"}}>
              <Text style={{ color: "#020f09" }}>3</Text>
              </View>
              
            </View>
          </View>
        </View>

        <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: "green", position: "absolute", alignItems: "center", justifyContent: "center", bottom: 50, right: 30 }}>
          <Text style={{ color: "white" }}>sms</Text>


        </View>










      </View>



    </View>




  )
}
export default App;