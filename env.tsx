// export const API_URL ="http://10.0.2.2:3000"; -> This is the IP address of the Android emulator
export const API_URL ="http://10.0.2.2:3000"; 
// export const API_URL ="http://192.168.1.4:3000"; -> This is the IP address of the Android device - Home
// export const API_URL ="http://192.168.110.137:3000"; -> This is the IP address of the Android device - Zone 7
export default {
    process: {
      env: {
        API_URL,
      },
    },
  };