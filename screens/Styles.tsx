import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginBottom: 25,
        marginTop: 10
    },

    text: { 
        fontSize: 21, 
        fontWeight: 'bold',
        marginRight: 19,
        color: '#07416d'
    },

    ImageSize: {
        width: 150,
        height: 150
    },

    view2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100,
        marginHorizontal: 2
    },

    text2: {
        paddingBottom: 10,
        fontSize: 24,
        marginTop: 50,
        fontWeight: 'bold',
        color: '#07416d'
    },

    text3: {
        fontSize: 18,
        paddingHorizontal: 10,
        fontWeight: '400',
        textAlign: 'center',
        color: '#07416d'
    },

    textColor: {
        marginHorizontal: 15, 
        backgroundColor: '#115b8f',
        padding: 6,
        borderRadius: 5
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      logoImage: {
        width: 80,
        height: 80,
        marginRight: 10,
      },
      logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#07416d',
      },
     
});