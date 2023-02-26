import React from 'react';
import { Text, View, Image } from 'react-native';


const App = () => {
  return (

    <View style={{ backgroundColor: "#0c0d0c", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ marginBottom: 10, height: 70, width: "100%", paddingHorizontal: 10, backgroundColor: "#1f2e23", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>Chat-App</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 15, color: "white" }}>explore</Text>
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
                uri: 'https://pbs.twimg.com/profile_images/1393955388119293958/sWrfRECy.jpg',
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

              <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>Raj</Text>
              <Text style={{ color: "green" }}>online</Text>

            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ color: "#c9c5b9", width: "90%" }}>This is awesome</Text>
              <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
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