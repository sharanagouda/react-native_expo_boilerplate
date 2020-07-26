// import React, { useState, useEffect} from 'react';
// import NetInfo from '@react-native-community/netinfo';

// import {Text} from 'react-native';

// function useNetInfo() {
//   // useState hook for setting netInfo
//   const [netInfo, setNetInfo] = useState(false)

//   // It calls when connection changes
//   const onChange = (newState) => {
//     setNetInfo(newState)
//   }
//   // useEffect hook calls only once like componentDidMount()
//   useEffect(() => {
//     // To get current network connection status
//     NetInfo.isConnected.fetch().then((connectionInfo) => {
//       setNetInfo(connectionInfo)
//     })
//     // Whenever connection status changes below event fires
//     NetInfo.isConnected.addEventListener('connectionChange', onChange)

//     // Our event cleanup function
//     return () => {
//       NetInfo.isConnected.removeEventListener('connectionChange', onChange)
//     }
//   }, [])

//   // returns current network connection status
//   return netInfo
// }

// function CheckConnection(){
//   const netInfo = useNetInfo();
//   return(
//       // this is just for an example you can design this as per your need
//       <Text>{netInfo ? 'Online' : 'Offline'}</Text>
//   )
// }

// export default CheckConnection;
