import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { EightPerson, FourPerson, SixPerson, ThreePerson, TwoPerson } from '.'
import { COLORS, FONTS, hp, normalize } from '../assets/styles/styleGuide'
import { boardStateSelectors, useBoard } from '../states/board'
import { generateRandomId } from '../utils/myUtils'
import { TABLE_2P, TABLE_3P, TABLE_4P, TABLE_6P, TABLE_8P } from '../data'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { SCREENS } from '../assets/enums'

const AddTableMenu = () => {
  const navigation = useNavigation()
  const tablesList = useBoard(boardStateSelectors.tablesList)
  const setTablesList = useBoard(boardStateSelectors.setTablesList)

  const menuList = [
    {
      id: 1,
      title: "2 Person",
      icon: <TwoPerson defaultSize={hp(4)} disabled={true} />,
      type: "2P"
    },
    {
      id: 2,
      title: "3 Person",
      icon: <ThreePerson defaultSize={hp(4)} disabled={true} />,
      type: "3P"
    },
    {
      id: 3,
      title: "4 Person",
      icon: <FourPerson defaultSize={hp(4)} disabled={true} />,
      type: "4P"
    },
    {
      id: 4,
      title: "6 Person",
      icon: <SixPerson defaultSize={hp(4)} disabled={true} />,
      type: "6P"
    },
    {
      id: 5,
      title: "8 Person",
      icon: <EightPerson defaultSize={hp(6)} disabled={true} />,
      type: "8P"
    },
  ]

  const handleAddtable = (table: any) => {
    let mTables: any = []
    const id = generateRandomId(32)

    switch (table?.type) {
      case "2P":
        mTables = [...tablesList, {
          id: id,
          ...TABLE_2P
        }]
        break;
      case "3P":
        mTables = [...tablesList, {
          id: id,
          ...TABLE_3P
        }]
        break;
      case "4P":
        mTables = [...tablesList, {
          id: id,
          ...TABLE_4P
        }]
        break;
      case "6P":
        mTables = [...tablesList, {
          id: id,
          ...TABLE_6P
        }]
        break;
      case "7P":
        mTables = [...tablesList, {
          id: id,
          ...TABLE_8P
        }]
        break;

      default:
        break;
    }

    setTablesList(mTables)
  }

  return (
    <View style={styles.main}>

      <TouchableOpacity
        style={styles.setting}
        onPress={() => navigation.navigate(SCREENS.SETTING)}
      >
        <AntDesign name={"setting"} color={COLORS.BLACK} size={hp(2)} />
        <Text style={styles.settingTxt}>Setting</Text>

      </TouchableOpacity>

      <Text style={styles.table}>Add Tables</Text>


      {
        menuList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => handleAddtable({ ...item, tableNumber: index + 1 })}
          >
            {item.icon}

            <Text style={styles.itemTxt}>{item.title}</Text>

          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default AddTableMenu

const styles = StyleSheet.create({
  main: {
    width: hp(15),
    borderLeftWidth: 1,
    borderColor: COLORS.GREY
  },
  item: {
    paddingVertical: hp(1.6),
    elevation: 4,
    backgroundColor: COLORS.WHITE,
  },
  itemTxt: {
    textAlign: 'center',
    fontSize: normalize(4),
    marginTop: hp(1),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_400
  },
  table: {
    textAlign: 'center',
    fontSize: normalize(4),
    marginVertical: hp(2),
    color: COLORS.BLACK,
    fontFamily: FONTS.POPPINS_600,
  },
  setting: {
    paddingVertical: hp(1.6),
    elevation: 4,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingTxt: {
    textAlign: 'center',
    fontSize: normalize(4),
    color: COLORS.BLACK,
    marginLeft: 5,
    fontFamily: FONTS.POPPINS_500,
    marginTop: 4
  },
})