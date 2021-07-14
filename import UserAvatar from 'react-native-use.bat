import UserAvatar from 'react-native-user-avatar';
 
const App: () => React$Node = () => {
  return (
    <>
    ...
    <View>
      <UserAvatar size={100} name="Avishay Bar" />
      <UserAvatar size={100} name="Avishay Bar" src="https://dummyimage.com/100x100/000/fff" />
      <UserAvatar size={50} name="John Doe" bgColors={['#ccc', '#fafafa', '#ccaabb']}/>
      <UserAvatar size={50} name="John Doe" />
      <UserAvatar size={50} name="Jane Doe" bgColor="#000" />
    </View>
    ...