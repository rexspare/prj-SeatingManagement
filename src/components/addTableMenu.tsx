import { useNavigation } from '@react-navigation/native'
import React, { FC } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {
  EightPerson,
  ElevenPerson,
  FivePerson,
  FourPerson,
  NinePerson,
  OnePerson,
  SevenPerson,
  SixPerson,
  TenPerson,
  ThreePerson,
  TwelvePerson,
  TwoPerson
} from '.'
import { SCREENS } from '../assets/enums'
import { COLORS, FONTS, hp, normalize } from '../assets/styles/styleGuide'
import {
  TABLE_1P,
  TABLE_2P,
  TABLE_3P,
  TABLE_4P,
  TABLE_5P,
  TABLE_6P,
  TABLE_7P,
  TABLE_8P,
  TABLE_9P,
  TABLE_10P,
  TABLE_11P,
  TABLE_12P
} from '../data'
import { boardStateSelectors, useBoard } from '../states/board'
import { generateRandomId } from '../utils/myUtils'

const AddTableMenu: FC = () => {
  const navigation = useNavigation()
  const tablesList = useBoard(boardStateSelectors.tablesList)
  const setTablesList = useBoard(boardStateSelectors.setTablesList)

  const menuList = [
    {
      id: 0,
      title: "1 Person",
      icon: <OnePerson defaultSize={hp(4)} disabled={true} isRound={true} />,
      type: "1P"
    },
    {
      id: 1,
      title: "2 Person",
      icon: <TwoPerson defaultSize={hp(4)} disabled={true} isRound={true} />,
      type: "2P"
    },
    {
      id: 2,
      title: "3 Person",
      icon: <ThreePerson defaultSize={hp(4)} disabled={true} isRound={true} />,
      type: "3P"
    },
    {
      id: 3,
      title: "4 Person",
      icon: <FourPerson defaultSize={hp(4)} disabled={true} isRound={true} />,
      type: "4P"
    },
    {
      id: 4,
      title: "5 Person",
      icon: <FivePerson defaultSize={hp(4)} disabled={true} />,
      type: "5P"
    },
    {
      id: 5,
      title: "6 Person",
      icon: <SixPerson defaultSize={hp(4)} disabled={true} />,
      type: "6P"
    },
    {
      id: 6,
      title: "7 Person",
      icon: <SevenPerson defaultSize={hp(6)} disabled={true} />,
      type: "7P"
    },
    {
      id: 7,
      title: "8 Person",
      icon: <EightPerson defaultSize={hp(6)} disabled={true} />,
      type: "8P"
    },
    {
      id: 8,
      title: "9 Person",
      icon: <NinePerson defaultSize={hp(6)} disabled={true} />,
      type: "9P"
    },
    {
      id: 9,
      title: "10 Person",
      icon: <TenPerson defaultSize={hp(6)} disabled={true} />,
      type: "10P"
    },
    {
      id: 10,
      title: "11 Person",
      icon: <ElevenPerson defaultSize={hp(6)} disabled={true} />,
      type: "11P"
    },
    {
      id: 11,
      title: "12 Person",
      icon: <TwelvePerson defaultSize={hp(6)} disabled={true} />,
      type: "12P"
    },
  ]

  const handleAddtable = (table: any, isRound: boolean) => {
    let mTables: any = []
    const id = generateRandomId(32)

    switch (table?.type) {
      case "1P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_1P
        }]
        break;
      case "2P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_2P
        }]
        break;
      case "3P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_3P
        }]
        break;
      case "4P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_4P
        }]
        break;
      case "5P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_5P
        }]
        break;
      case "6P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_6P
        }]
        break;
      case "7P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_7P
        }]
        break;
      case "8P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_8P
        }]
        break;
      case "9P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_9P
        }]
        break;
      case "10P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_10P
        }]
        break;
      case "10P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_10P
        }]
        break;
      case "11P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_11P
        }]
        break;
      case "12P":
        mTables = [...tablesList, {
          id: id,
          isRound: isRound,
          ...TABLE_12P
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

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          menuList.map((item, index) => (

            <Menu>
              <MenuTrigger style={styles.item}>

                {item.icon}

                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={styles.itemTxt}>{item.title}</Text>

              </MenuTrigger>
              <MenuOptions optionsContainerStyle={styles.optionContainer}>
                <MenuOption onSelect={() => handleAddtable(item, true)} >
                  <Text style={styles.optionTxt} >Round Table</Text>
                </MenuOption>
                <MenuOption onSelect={() => handleAddtable(item, false)} >
                  <Text style={styles.optionTxt} >Sqaure Table</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>

          ))
        }
      </ScrollView>

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
  optionTxt: {
    fontFamily: FONTS.POPPINS_500,
    color: COLORS.BLACK,
    fontSize: hp(2),
    marginVertical: hp(1),
    textAlign: 'center'
  },
  optionContainer: {
    marginLeft: -20,
  }
})