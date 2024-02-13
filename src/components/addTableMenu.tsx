import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { EightPerson, FourPerson, SixPerson, ThreePerson, TwoPerson } from '.'
import { COLORS, FONTS, hp, normalize } from '../assets/styles/styleGuide'
import { boardStateSelectors, useBoard } from '../states/board'

const AddTableMenu = () => {
  const tablesList = useBoard(boardStateSelectors.tablesList)
  const setTablesList = useBoard(boardStateSelectors.setTablesList)

  const menuList = [
    {
      id: 1,
      title: "2 Person",
      icon: <TwoPerson size={hp(4)} disabled={true} />,
      type: "2P"
    },
    {
      id: 2,
      title: "3 Person",
      icon: <ThreePerson size={hp(4)} disabled={true} />,
      type: "3P"
    },
    {
      id: 3,
      title: "4 Person",
      icon: <FourPerson size={hp(4)} disabled={true} />,
      type: "4P"
    },
    {
      id: 4,
      title: "6 Person",
      icon: <SixPerson size={hp(4)} disabled={true} />,
      type: "6P"
    },
    {
      id: 5,
      title: "8 Person",
      icon: <EightPerson size={hp(6)} disabled={true} />,
      type: "8P"
    },
  ]

  const handleAddtable = (table: any) => {
    setTablesList([...tablesList, table])
  }

  return (
    <View style={styles.main}>
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
    width: hp(15)
  },
  item: {
    paddingVertical: hp(1.6),
    elevation: 4,
    backgroundColor: COLORS.WHITE
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
  }
})