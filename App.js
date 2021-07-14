import React from 'react';
import { Text, View } from 'react-native';


const App = () => {
  return (

    <View style={{ backgroundColor: "#0f0f0e", flex: 1, alignItems: "center", justifyContent: "center", padding: 10, paddingBottom: 0, }}>
      <View style={{ flex: 1, width: "100%" }}>
        <View style={{ backgroundColor: "#0b82b5", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>WhatsApp</Text>
        </View>
        <View style={{ flexDirection: "row", }}>
          <View style={{ marginRight: 10 }}>
            <Text style={{ color: "white" }}>pic</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>Raj Kumar Tiwari</Text>
              <Text style={{ color: "green" }}>online</Text>

            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#c9c5b9" }}>fdkfwjfofnefn,mnjrogjebewojrqopwjebfdnfsfijewjehfnwjophejhfiifeii</Text>
              <Text style={{ color: "blue" }}>3</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: "green", position: "absolute",alignItems:"center",justifyContent:"center",bottom:50,right:30 }}>
          <Text style={{color:"white"}}>sms</Text>


        </View>










      </View>



    </View>




  )
}
export default App;