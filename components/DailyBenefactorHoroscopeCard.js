// packages
import { View, Text, StyleSheet, Image} from 'react-native'

// constants
import { GlobalStyles } from '../constants/styles'

const DailyBenefactorHoroscopeCard = ({ children }) => {
  const questionMark = { uri: 'https://i.imgur.com/1M3VFJ7.png' }
  const checkMark = { uri: 'https://i.imgur.com/2wXk9kT.png' }
  return (
    <View style={styles.container}>
      {
        children 
        &&
          <View style={styles.header}>
            <Text style={[styles.title, styles.customTitleStyle]}>{children}</Text>
          </View>
      }
        <View style={styles.body}>
          <View style={styles.inmageContainer}>
            <Image source={questionMark} style={styles.questionMarkImg} />
          </View>
          <View style={styles.checkList}>
            <View style={styles.checkListItem}>
              <Image source={checkMark} style={styles.checkMarkImg} />
              <Text>Send message +2</Text>
            </View>
            <View style={styles.checkListItem}>
              <Image source={checkMark} style={styles.checkMarkImg} />
              <Text>Receive message +2</Text>
            </View>
            <View style={styles.checkListItem}>
              <Image source={checkMark} style={styles.checkMarkImg} />
              <Text>Send and receive +1</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

export default DailyBenefactorHoroscopeCard

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 12, 
    backgroundColor: GlobalStyles.horoscopeColors.primary, 
    borderRadius: 12, 
    // aspectRatio: 328 / 224,
    height: 224,
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
    paddingTop: 16,
    // borderWidth: 1,
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
  questionMarkImg: {
    width: 100,
    height: 100,
  },
  checkList: {
    marginLeft: 24,
  },  
  checkListItem: {
    flexDirection: 'row',
    paddingVertical: 6,
  },  
  checkMarkImg: {
    width: 18,
    height: 18,
    marginRight: 4,
  }
})