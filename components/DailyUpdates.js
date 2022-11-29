// packages
import { useState, useEffect } from 'react'
import { View, Text, Pressable, StyleSheet, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';

// constants
import { GlobalStyles } from '../constants/styles'

// components
import DailyFortuneHoroscopeCard from './DailyFortuneHoroscopeCard'

// data
import { USERS } from '../data/User';
import { USER_TWELVE_METEOR_MAP } from '../data/TwelveMeteorsMapping'
import { USER_TEN_FORCE_MAP } from '../data/TenForcesMapping'
import { USER_TWELVE_SPIRITS_MAP } from '../data/TwelveSpiritsMapping'
import { USER_ANOMALY_MAP } from '../data/AnomaliesMapping'
import { 
  HEAVENLY_NOBLEMAN_STAR, HEAVENLY_VIRTUE_STAR, SUPREME_ULTIMATE_STAR, CREATOR_STAR, 
  HEAVENLY_KITCHEN_STAR, LUNAR_VIRTUE_STAR, HEAVENLY_FORTUNE_STAR} from '../data/SecretBenefactorMapping'

const DailyUpdates = ({ currentUser, calendarDateGanJiObj }) => {
  const navigation = useNavigation()

  // data for mapping (daily fortune)
  const [userTwelveStageMap, setUserTwelveStageMap] = useState(USER_TWELVE_METEOR_MAP)
  const [userTenForceMap, setUserTenForceMap] = useState(USER_TEN_FORCE_MAP)
  const [userTwelveSpiritsMap, setUserTwelveSpiritsMap] = useState(USER_TWELVE_SPIRITS_MAP)
  const [userAnomaliesMap, setUserAnomaliesMap] = useState(USER_ANOMALY_MAP)
  const [userTwelveStageObj, setUserTwelveStageObj] = useState()
  const [userTenForceGanObj, setUserTenForceGanObj] = useState()
  const [userTenForceJiObj, setUserTenForceJiObj] = useState()
  const [userTwelveSpiritObj, setUserTwelveSpiritObj] = useState()
  const [userAnomalyYearObj, setUserAnomalyYearObj] = useState()
  const [userAnomalyMonthObj, setUserAnomalyMonthObj] = useState()
  const [userAnomalyDayObj, setUserAnomalyDayObj] = useState()
  const [userAnomalyHourObj, setUserAnomalyHourObj] = useState()

  // data for mapping (secret benefactor)
  const [heavenlyNoblemanMap, setHeavenlyNoblemanMap] = useState(HEAVENLY_NOBLEMAN_STAR)
  const [heavenlyVirtueMap, setHeavenlyVirtueMap] = useState(HEAVENLY_VIRTUE_STAR)
  const [supremeUltimateMap, setSupremeUltimateMap] = useState(SUPREME_ULTIMATE_STAR)
  const [creatorMap, setCreator] = useState(CREATOR_STAR)
  const [heavenlyKitchenMap, setHeavenlyKitchenMap] = useState(HEAVENLY_KITCHEN_STAR)
  const [lunarVirtueMap, setLunarVirtueMap] = useState(LUNAR_VIRTUE_STAR)
  const [heavenlyFortuneMap, setHeavenlyFortuneMap] = useState(HEAVENLY_FORTUNE_STAR)

  // const [heavenlyNoblemanObj, setHeavenlyNoblemanObj] = useState()
  // const [heavenlyVirtueObj, setHeavenlyVirtueObj] = useState()
  // const [supremeUltimateObj, setSupremeUltimateObj] = useState()
  // const [creatorObj, setCreatorObj] = useState()
  // const [heavenlyKitchenObj, setHeavenlyKitchenObj] = useState()
  // const [userAnomalyMonthObj, setUserAnomalyMonthObj] = useState()
  // const [userAnomalyDayObj, setUserAnomalyDayObj] = useState()
  // const [userAnomalyHourObj, setUserAnomalyHourObj] = useState()

  // for sorting out benefactor
  const [users, setUsers] = useState(USERS)
  // const [sortedUsers, setSortedUsers] = []
  
  // console.log(users)
  // console.log(heavenlyNoblemanMap)
  // console.log(currentUser)

  useEffect(() => {
    calendarDateGanJiObj && setUserTwelveStageObj(userTwelveStageMap.find(userTwelveStageObj => 
      userTwelveStageObj.userDayGan === currentUser.dayGan 
      && userTwelveStageObj.calendarPillarJi === calendarDateGanJiObj.ji
    ))
    calendarDateGanJiObj && setUserTenForceGanObj(userTenForceMap.find(userTenForceGanObj => 
      userTenForceGanObj.userDayGan === currentUser.dayGan 
      && userTenForceGanObj.calendarPillarGan.includes(calendarDateGanJiObj.gan)
    ))
    calendarDateGanJiObj && setUserTenForceJiObj(userTenForceMap.find(userTenForceJiObj => 
      userTenForceJiObj.userDayGan === currentUser.dayGan 
      && userTenForceJiObj.calendarPillarJi.includes(calendarDateGanJiObj.ji)
    ))
    calendarDateGanJiObj && setUserTwelveSpiritObj(userTwelveSpiritsMap.find(userTwelveSpiritObj => 
      userTwelveSpiritObj.userYearJi.includes(currentUser.yearJi)
      && userTwelveSpiritObj.calendarDayJi === calendarDateGanJiObj.ji
    ))
    calendarDateGanJiObj && setUserAnomalyYearObj(userAnomaliesMap.find(userAnomalyYearObj => 
      userAnomalyYearObj.userJi === currentUser.yearJi
      && userAnomalyYearObj.calendarJi.includes(calendarDateGanJiObj.ji)
    ))
    calendarDateGanJiObj && setUserAnomalyMonthObj(userAnomaliesMap.find(userAnomalyMonthObj => 
      userAnomalyMonthObj.userJi === currentUser.monthJi
      && userAnomalyMonthObj.calendarJi.includes(calendarDateGanJiObj.ji)
    ))
    calendarDateGanJiObj && setUserAnomalyDayObj(userAnomaliesMap.find(userAnomalyDayObj => 
      userAnomalyDayObj.userJi === currentUser.dayJi
      && userAnomalyDayObj.calendarJi.includes(calendarDateGanJiObj.ji)
    ))
    calendarDateGanJiObj && setUserAnomalyHourObj(userAnomaliesMap.find(userAnomalyHourObj => 
      userAnomalyHourObj.userJi === currentUser.hourJi
      && userAnomalyHourObj.calendarJi.includes(calendarDateGanJiObj.ji)
    ))
  },[calendarDateGanJiObj])

  function dailyHoroscopePressHandler() {
    userTwelveStageObj &&
    navigation.navigate('HoroscopeDailyFortune', {
      currentUser: currentUser,
      calendarDateGanJiObj: calendarDateGanJiObj,
      userTwelveStageObj: userTwelveStageObj,
      userTenForceGanObj: userTenForceGanObj,
      userTenForceJiObj: userTenForceJiObj,
      userTwelveSpiritObj: userTwelveSpiritObj,
      userAnomalyYearObj: userAnomalyYearObj,
      userAnomalyMonthObj: userAnomalyMonthObj,
      userAnomalyDayObj: userAnomalyDayObj,
      userAnomalyHourObj: userAnomalyHourObj,
    })
  }


  function sortList() {
    let heavenlyNoblemanList = []
    let heavenlyVirtueList = []
    let supremeUltimateList = []
    let creatorList = []
    let heavenlyKitchenList = []
    let lunarVirtueList = []
    let heavenlyFortuneList = []

    let score = 0

    let localUsers = []


    for(let i=0; i<users.length; i++){
      // heanvely nobleman
      heavenlyNoblemanList = heavenlyNoblemanMap.filter(heavenlyNoblemanObj => 
        heavenlyNoblemanObj.userDayGan === currentUser.dayGan 
        && heavenlyNoblemanObj.targetUserJi.includes(users[i].yearJi || users[i].monthJi || users[i].dayJi || users[i].hourJi))
      
      // heavenly virtue
      heavenlyVirtueList = heavenlyVirtueMap.filter(heavenlyVirtueObj => 
        heavenlyVirtueObj.userMonthJi === currentUser.monthJi 
          && 
            (
              heavenlyVirtueObj.targetUserGan && heavenlyVirtueObj.targetUserGan.includes(users[i].yearGan || users[i].monthGan || users[i].dayGan || users[i].hourGan)
              ||
              heavenlyVirtueObj.targetUserJi && heavenlyVirtueObj.targetUserJi.includes(users[i].yearJi || users[i].monthJi || users[i].dayJi || users[i].hourJi)
            )
      )
      
      // Supreme ultimate
      supremeUltimateList = supremeUltimateMap.filter(supremeUltimateObj =>
        supremeUltimateObj.userDayGan === currentUser.dayGan
        && supremeUltimateObj.targetUserYearJi.includes(currentUser.yearJi)
      )

       // Creator
      creatorList = creatorMap.filter(creatorObj =>
        creatorObj.userDayGan === currentUser.dayGan
        && creatorObj.targetUserJi.includes(users[i].yearJi || users[i].monthJi || users[i].dayJi || users[i].hourJi))
    
       // Heavenly Kitchen
      heavenlyKitchenList = heavenlyKitchenMap.filter(heavenlyKitchenObj =>
        heavenlyKitchenObj.userDayGan === currentUser.dayGan 
        && heavenlyKitchenObj.targetUserMonthJi === currentUser.monthJi 
      )
    
       // Lunar Virtue
      lunarVirtueList = lunarVirtueMap.filter(lunarVirtueObj =>
        lunarVirtueObj.userMonthJi === currentUser.monthJi
        &&  lunarVirtueObj.targetUserGan.includes(users[i].yearGan || users[i].monthGan || users[i].dayGan || users[i].hourGan)
      )

       // Heavenly Fortune
      heavenlyFortuneList = heavenlyFortuneMap.filter(heavenlyFortuneObj =>
        heavenlyFortuneObj.userDayGan === currentUser.dayGan 
        && heavenlyFortuneObj.targetUserJi.includes(users[i].yearJi || users[i].monthJi || users[i].dayJi || users[i].hourJi)
      )

      score = 
        (heavenlyFortuneMap[0].score * heavenlyNoblemanList.length) + 
        (heavenlyVirtueMap[0].score * heavenlyVirtueList.length) +
        (supremeUltimateMap[0].score * supremeUltimateList.length) +
        (creatorMap[0].score * creatorList.length) +
        (heavenlyKitchenMap[0].score * heavenlyKitchenList.length) +
        (lunarVirtueMap[0].score * lunarVirtueList.length) +
        (heavenlyFortuneMap[0].score * heavenlyFortuneList.length)

      localUsers.push(
        {
          name: users[i].name, 
          score: score, 
        }
      )
    }

    return localUsers
  }

  function dailyBenefactorPressHandler() {
    let sortedUsers = sortList()
    console.log(sortedUsers)
    
    // return the last one in the list if more than two people share the same max score. 
    let benefactor = sortedUsers.reduce(function(prev, current) { 
      return (prev.score > current.score) ? prev : current  })


    Alert.alert(benefactor.name, "Your secret benefactor today is " + benefactor.name); 

  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Your day at a glance</Text>
        <Pressable onPress={dailyHoroscopePressHandler}>
          <DailyFortuneHoroscopeCard />
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default DailyUpdates

const styles = StyleSheet.create({
  category: {
    marginVertical: 24,
  },
  categoryTitle: {
    fontSize: 16,
    color: GlobalStyles.baseColors.gray_500
  }
})