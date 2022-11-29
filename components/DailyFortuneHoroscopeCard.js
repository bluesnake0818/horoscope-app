// packages
import { View, Text, StyleSheet, Image} from 'react-native'

// constants
import { GlobalStyles } from '../constants/styles'

const DailyFortuneHoroscopeCard = ({ children }) => {
  const graphImg = { uri: 'https://i.imgur.com/hKprQg6.png' };
  return (
    <View style={styles.container}>
      {
        children 
        &&
          <View style={styles.header}>
            <Text style={[styles.title, styles.customTitleStyle]}>{children}</Text>
          </View>
      }
        <View style={styles.header}>
          <Text style={styles.title}>If you're looking for something new, today is the day!</Text>
          <Text style={styles.itemsTitle}>Daily Chart</Text>
          <View style={styles.graphContainer}>
            <Image source={graphImg} style={styles.graph} />
          </View>
        </View>
    </View>
  )
}

export default DailyFortuneHoroscopeCard

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 12, 
    backgroundColor: GlobalStyles.horoscopeColors.primary, 
    borderRadius: 12, 
    // aspectRatio: 328 / 224,
    height: 436,
    width: 328, 
    marginVertical: 8, 
  },
  image: {
    // flex: 1,
    width: 36,
    height: 36,
    // borderWidth: 2,
    borderRadius: 18,
    // borderColor: GlobalStyles.baseColors.purple_400,
    // justifyContent: 'flex-start',
  },
  header: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 30, 
    marginBottom: 20,
    fontWeight: 'bold',
    color: GlobalStyles.baseColors.gray_800
  },
  itemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.baseColors.gray_800
  },
  body: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical: 12, 
    width: '100%',  
  },
  premiumLabel: {
    backgroundColor: GlobalStyles.profileColors.yellow_200,
    width: 65,
    height: 18,
    borderRadius: 20,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumText: {
    color: GlobalStyles.baseColors.gray_700,
    fontSize: 12,
    fontWeight: 'bold',
  },
  bgImage: {
    width: 320,
    height: undefined,
    aspectRatio: 296 / 160,
    borderRadius: 12,
  },
  zodiacName: {
    position: 'absolute',
    color: GlobalStyles.baseColors.white,
    fontSize: 16, 
    fontWeight: 'bold',
    left: 90,
    top: 140,
  },
  zodiacImg: {
    position: 'absolute',
    width: 80,
    height: 80, 
    left: 120,
    top: 60,
  },
  graphContainer: {
    width: '100%', 
    alignItems: 'center', 
    paddingVertical: 24,
  },
  graph: {
    width: 220,
    height: 220,
  },
})