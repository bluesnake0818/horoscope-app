// packages
import { useState, useEffect, useContext } from 'react'
import { StyleSheet, Pressable, Text, View } from 'react-native'

// context
import { AuthContext } from '../store/auth-context';

// constants
import { GlobalStyles } from '../constants/styles';

// 3rd party library
import moment from 'moment';

// Data
import { YEARGANJI, MONTHGANJI, DATEGANJI } from '../data/CalendarGanJi'

// Components
import DailyUpdates from '../components/DailyUpdates';

const Horoscope = () => {
  const [isDailyUpdatesEnabled, setIsDailyUpdatesEnabled ] = useState(true)
  const [isYourSignsEnabled, setIsYourSignsEnabled ] = useState(false)

  const authCtx = useContext(AuthContext)
  const currentUser = authCtx.currentUser

  // const [heavenlyStems, setHeavenlyStems] = useState(GAN)
  const [yearGanObj, setYearGanObj] = useState({})
  const [monthGanObj, setMonthGanObj] = useState({})
  const [dayGanObj, setDayGanObj] = useState({})
  const [hourGanObj, setHourGanObj] = useState({})
  
  // const [earthlyBranches, setearthlyBranches] = useState(JI)
  const [yearJiObj, setYearJiObj] = useState({})
  const [monthJiObj, setMonthJiObj] = useState({})
  const [dayJiObj, setDayJiObj] = useState({})
  const [hourJiObj, setHourJiObj] = useState({})

  // Set Calendar GanJi as of Today
  const [calendarYearGanJi, setCalendarYearGanJi] = useState(YEARGANJI)
  const [calendarMonthGanJi, setCalendarMonthGanJi] = useState(MONTHGANJI)
  const [calendarDateGanJi, setCalendarDateGanJi] = useState(DATEGANJI)
  const [calendarYearGanJiObj, setCalendarYearGanJiObj] = useState({})
  const [calendarMonthGanJiObj, setCalendarMonthGanJiObj] = useState({})
  const [calendarDateGanJiObj, setCalendarDateGanJiObj] = useState({})
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState(moment().format("MMM"))
  let today = new Date()
  const [currentDate, setCurrentDate] = useState(moment(new Date()).format('YYYY-MM-DD'))

  useEffect(() => {
    setCalendarYearGanJiObj(calendarYearGanJi.find(calendarYearGanJiObj => calendarYearGanJiObj.year === currentYear))
    setCalendarMonthGanJiObj(calendarMonthGanJi.find(calendarMonthGanJiObj => 
      calendarMonthGanJiObj.year === currentYear && calendarMonthGanJiObj.month === currentMonth))
    setCalendarDateGanJiObj(calendarDateGanJi.find(calendarDateGanJiObj => calendarDateGanJiObj.date === currentDate))
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Pressable
          style={[styles.dailyUpdatesTitleContainer, isDailyUpdatesEnabled && styles.enabledTitleContainer]}
        >
          <Text style={[styles.title, isDailyUpdatesEnabled && styles.titleEnabled]}>Daily Updates</Text>
        </Pressable>
        <Pressable
          style={[styles.yourSignsTitleContainer, !isDailyUpdatesEnabled && styles.enabledTitleContainer]}
        >
          <Text style={[styles.title, isYourSignsEnabled && styles.titleEnabled]}>Your Signs</Text>
        </Pressable>
      </View>
      {
        isDailyUpdatesEnabled && 
        <DailyUpdates 
          currentUser={currentUser} 
          calendarDateGanJiObj={calendarDateGanJiObj}
        />
      }
    </View>
  )
}

export default Horoscope

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.baseColors.purple_100,
    justifyContent: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: GlobalStyles.baseColors.gray_500,
    borderBottomWidth: 1,
  }, 
  dailyUpdatesTitleContainer: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 6,
  },  
  yourSignsTitleContainer: {
    width: '50%',
    alignItems: 'center',
    paddingVertical: 6,
  },  
  enabledTitleContainer: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    color: GlobalStyles.baseColors.gray_500
  },
  titleEnabled: {
    color: 'black'
  }
})