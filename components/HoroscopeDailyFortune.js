// packages
import { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'

// constants
import { GlobalStyles } from '../constants/styles';

// data
import { DAY_FORTUNE_ACADEMICS } from '../data/DayFortuneAcademics'
import { DAY_FORTUNE_HEALTH } from '../data/DayFortuneHealth'
import { DAY_FORTUNE_FINANCES } from '../data/DayFortuneFinances'
import { DAY_FORTUNE_ROMANCE } from '../data/DayFortuneRomance'
import { DAY_FORTUNE_CAREERS } from '../data/DayFortuneCareers'
import { DAY_FORTUNE_TWELVE_METEORS_GENERAL } from '../data/DayFortuneTwelveMeteorsGeneral'
import { DAY_FORTUNE_TWELVE_SPIRITS } from '../data/DayFortuneTwelveSpirits'
import { 
  ANOMALY_USER_YEAR_BRANCH, 
  ANOMALY_USER_MONTH_BRANCH, 
  ANOMALY_USER_DAY_BRANCH, 
  ANOMALY_USER_HOUR_BRANCH 
} from '../data/DayFortuneAnomalies'

// context & util
import { AuthContext } from '../store/auth-context';
import { renderIndex, renderIndexAnomaly } from '../util/math';

// UI
import LoadingOverlay from '../components/LoadingOverlay'

const HoroscopeDailyFortune = ({ route }) => {
  const authCtx = useContext(AuthContext)

  const graphImg = { uri: 'https://i.imgur.com/hKprQg6.png' };;
  const healthIcon = { uri: 'https://i.imgur.com/mgWtdFa.png'}
  const academicsIcon = { uri: 'https://i.imgur.com/NFpLoUc.png'}
  const relationshipsIcon = { uri: 'https://i.imgur.com/DkKvlia.png'}
  const financesIcon = { uri: 'https://i.imgur.com/uxQGSNN.png'}
  const careersIcon = { uri: 'https://i.imgur.com/WE4XM27.png'}

  const [randIndex, setRandIndex] = useState()
  const [randIndexAnomaly, setRandIndexAnomaly] = useState()
  const [professionalData, setProfessionalData] = useState(DAY_FORTUNE_CAREERS)
  const [financesData, setFinancesData] = useState(DAY_FORTUNE_FINANCES)
  const [romanceData, setRomanceData] = useState(DAY_FORTUNE_ROMANCE)
  const [healthData, setHealthData] = useState(DAY_FORTUNE_HEALTH)
  const [academicsData, setAcademicsData] = useState(DAY_FORTUNE_ACADEMICS)
  const [twelveMeteorsGeneralData, setTwelveMeteorsGeneralData] = useState(DAY_FORTUNE_TWELVE_METEORS_GENERAL)
  const [twelveSpiritsData, setTwelveSpiritsData] = useState(DAY_FORTUNE_TWELVE_SPIRITS)
  const [userAnomalyYearJiData, setUserAnomalyYearJiData] = useState(ANOMALY_USER_YEAR_BRANCH)
  const [userAnomalyMonthJiData, setUserAnomalyMonthJiData] = useState(ANOMALY_USER_MONTH_BRANCH)
  const [userAnomalyDayJiData, setUserAnomalyDayJiData] = useState(ANOMALY_USER_DAY_BRANCH)
  const [userAnomalyHourJiData, setUserAnomalyHourJiData] = useState(ANOMALY_USER_HOUR_BRANCH)
  
  const [professionalObj, setProfessionalObj] = useState()
  const [financesObj, setFinancesObj] = useState()
  const [romanceObj, setRomanceObj] = useState()
  const [healthGanObj, setHealthGanObj] = useState()
  const [healthJiObj, setHealthJiObj] = useState()
  const [academicsGanObj, setAcademicsGanObj] = useState()
  const [academicsJiObj, setAcademicsJiObj] = useState()
  const [twelveMeteorsGeneralObj, setTwelveMeteorsGeneralObj] = useState()
  const [twelveSpiritsObj, setTwelveSpiritsObj] = useState()
  const [userAnomalyYearJiObj, setUserAnomalyYearJiObj] = useState()
  const [userAnomalyMonthJiObj, setUserAnomalyMonthJiObj] = useState()
  const [userAnomalyDayJiObj, setUserAnomalyDayJiObj] = useState()
  const [userAnomalyHourJiObj, setUserAnomalyHourJiObj] = useState()

  const userTwelveStageObj = route.params?.userTwelveStageObj
  const userTenForceGanObj = route.params?.userTenForceGanObj
  const userTenForceJiObj = route.params?.userTenForceJiObj
  const userTwelveSpiritObj = route.params?.userTwelveSpiritObj
  const userAnomalyYearObj = route.params?.userAnomalyYearObj
  const userAnomalyMonthObj = route.params?.userAnomalyMonthObj
  const userAnomalyDayObj = route.params?.userAnomalyDayObj
  const userAnomalyHourObj = route.params?.userAnomalyHourObj

  // // pass random numbers down from server so it doesn't get rendered everytime user enters the screen
  // const renderIndex = () => {
  //   const randomIndex = Math.floor(Math.random() * Math.floor(6));
  //   return randomIndex
  // }

  // // pass random numbers down from server so it doesn't get rendered everytime user enters the screen
  // const renderIndexAnomaly = () => {
  //   const randomIndex = Math.floor(Math.random() * Math.floor(2));
  //   return randomIndex
  // }

  useEffect(() => {
    setRandIndex(renderIndex())
    setRandIndexAnomaly(renderIndexAnomaly())
    
    setProfessionalObj(professionalData.find(professionalObj => professionalObj.calendarDayJiStage === userTwelveStageObj.professional))
    setFinancesObj(financesData.find(financesObj => financesObj.calendarDayJiStage === userTwelveStageObj.finances))
    setRomanceObj(romanceData.find(romanceObj => 
      authCtx.genderFortune === 'Female' 
      ? romanceObj.calendarDayJiStage === userTwelveStageObj.professional
      : romanceObj.calendarDayJiStage === userTwelveStageObj.finances
      ))
    setAcademicsGanObj(academicsData.find(academicsGanObj => academicsGanObj.calendarDayGanStage === userTenForceGanObj.star))
    setAcademicsJiObj(academicsData.find(academicsJiObj => academicsJiObj.calendarDayJiStage === userTenForceJiObj.star))
    setHealthGanObj(healthData.find(healthGanObj => healthGanObj.calendarDayGanStage === userTenForceGanObj.star))
    setHealthJiObj(healthData.find(healthJiObj => healthJiObj.calendarDayJiStage === userTenForceJiObj.star))
    setTwelveMeteorsGeneralObj(twelveMeteorsGeneralData.find(twelveMeteorsGeneralObj => twelveMeteorsGeneralObj.calendarDayJiStage === userTwelveStageObj.general))
    setTwelveSpiritsObj(twelveSpiritsData.find(twelveSpiritsObj => twelveSpiritsObj.name === userTwelveSpiritObj.spirit))
    
    userAnomalyYearObj && setUserAnomalyYearJiObj(userAnomalyYearJiData.find(userAnomalyYearJiObj => userAnomalyYearJiObj.type === userAnomalyYearObj.type))
    userAnomalyMonthObj && setUserAnomalyMonthJiObj(userAnomalyMonthJiData.find(userAnomalyMonthJiObj => userAnomalyMonthJiObj.type === userAnomalyMonthObj.type))
    userAnomalyDayObj && setUserAnomalyDayJiObj(userAnomalyDayJiData.find(userAnomalyDayJiObj => userAnomalyDayJiObj.type === userAnomalyDayObj.type))
    userAnomalyHourObj && setUserAnomalyHourJiObj(userAnomalyHourJiData.find(userAnomalyHourJiObj => userAnomalyHourJiObj.type === userAnomalyHourObj.type))
  },[])


    if(!professionalObj || !financesObj || !romanceObj || !randIndex || !twelveSpiritsObj) {
      return <LoadingOverlay message='loading..' />
    }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>If you're looking for something new, today is the day!</Text>
          <Text style={styles.itemsTitle}>Daily Chart</Text>
          <View style={styles.graphContainer}>
            <Image source={graphImg} style={styles.graph} />
          </View>
        </View>

        <View style={styles.highlights}>
          <Text style={[styles.itemsTitle, {marginBottom: 24}]}>Highlights</Text>
          { 
            (healthGanObj || healthJiObj) && 
              <View>
                <View style={styles.highlightsTitle}>
                  <Image source={healthIcon} style={styles.icon} />
                  <Text style={styles.itemsTitle}>Health</Text>  
                </View>
              {
                healthGanObj &&
                <Text style={styles.mainText}>{healthGanObj.text[randIndex]}</Text>
              }
              {
                healthJiObj &&
                <Text style={styles.mainText}>{healthJiObj.text[randIndex]}</Text>
              }
              </View>
          }
          {
            (academicsGanObj || academicsJiObj) && 
              <View>
                <View style={styles.highlightsTitle}>
                  <Image source={academicsIcon} style={styles.icon} />
                  <Text style={styles.itemsTitle}>Academics</Text>
                </View>
              {
                academicsGanObj &&
                <Text style={styles.mainText}>{academicsGanObj.text[randIndex]}</Text>
              }
              {
                academicsJiObj &&
                <Text style={styles.mainText}>{academicsJiObj.text[randIndex]}</Text>
              }
              </View>
          }
          <View>
            <View style={styles.highlightsTitle}>
              <Image source={relationshipsIcon} style={styles.icon} />
              <Text style={styles.itemsTitle}>Relationship</Text>
            </View>
            <Text style={styles.mainText}>{romanceObj.text[randIndex]}</Text>
          </View>
          <View>
            <View style={styles.highlightsTitle}>
              <Image source={financesIcon} style={styles.icon} />
              <Text style={styles.itemsTitle}>Finances</Text>
            </View>
            <Text style={styles.mainText}>{financesObj.text[randIndex]}</Text>
          </View>
          <View>
            <View style={styles.highlightsTitle}>
              <Image source={careersIcon} style={styles.icon} />
              <Text style={styles.itemsTitle}>Careers</Text>
            </View>
            <Text style={styles.mainText}>{professionalObj.text[randIndex]}</Text>
          </View>
        </View>
        <View style={styles.twleveMeteorsContainer}>
          <Text style={styles.itemsTitle}>Twelve life stage forces</Text>
          <Text style={styles.itemsSubtitle}>Forces that determine overall flow</Text>
          <Text style={styles.mainText}>{twelveMeteorsGeneralObj.text}</Text>
        </View>

        <View style={styles.specialStarsContainer}>
          <Text style={styles.itemsTitle}>Special forces at play</Text> 
          <Text style={styles.itemsSubtitle}>Forces activated by trigger</Text>
          <Text style={styles.mainText}>{twelveSpiritsObj.text}</Text>
        </View>

        { 
          (userAnomalyYearJiObj || userAnomalyMonthJiObj || userAnomalyDayJiObj || userAnomalyHourJiObj) 
          && 
            <View style={styles.anomaliesContainer}>
              <Text style={styles.itemsTitle}>Anomalies</Text>
              <Text style={styles.itemsSubtitle}>Forces that can throw you off course</Text>
        {
              userAnomalyYearJiObj &&
              <View>
                  <Text style={styles.mainText}>{userAnomalyYearJiObj.category} in Year Pillar - {userAnomalyYearJiObj.text[randIndexAnomaly]}</Text>
              </View>
        }

        {     
              userAnomalyMonthJiObj &&
              <View>
                  <Text style={styles.mainText}>{userAnomalyMonthJiObj.category} in Month Pillar - {userAnomalyMonthJiObj.text[randIndexAnomaly]}</Text>
              </View>
        }

        {     
              userAnomalyDayJiObj &&
              <View>
                  <Text style={styles.mainText}>{userAnomalyDayJiObj.category} in Day Pillar - {userAnomalyDayJiObj.text[randIndexAnomaly]}</Text>
              </View>
        }

        {     
              userAnomalyHourJiObj &&
              <View>
                  <Text style={styles.mainText}>{userAnomalyHourJiObj.category} in Hour Pillar - {userAnomalyHourJiObj.text[randIndexAnomaly]}</Text>
              </View>
        }
            </View>
        }
      </ScrollView>
    </View>
  )
}

export default HoroscopeDailyFortune

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24, 
    backgroundColor: GlobalStyles.baseColors.white
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
  graphContainer: {
    width: '100%', 
    alignItems: 'center', 
    paddingVertical: 24,
  },
  graph: {
    width: 220,
    height: 220,
  },
  itemsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.baseColors.gray_800
  },
  itemsSubtitle: {
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 4,
    color: GlobalStyles.baseColors.gray_800
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  image: {
    width: 80, 
    height: 80,
  },
  item: {
    width: '30%',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 14, 
    lineHeight: 20,
    textAlign: 'left'
  },
  itemText: {
    textAlign: 'center'
  },
  highlightsTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24, 
    height: 24,
    marginRight: 4,
  }, 
  twleveMeteorsContainer: {
    marginVertical: 24,
  },
  specialStarsContainer: {
    marginVertical: 24,
  },
  anomaliesContainer: {
    marginVertical: 24,
  },
  luckyItemsContainer: {
    marginVertical: 24,
  }, 
  mainText: {
    color: GlobalStyles.baseColors.gray_700,
    fontSize: 14, 
    paddingVertical: 14,
    lineHeight: 20,
  }
})