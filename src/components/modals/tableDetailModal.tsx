import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { boardStateSelectors, useBoard } from '../../states/board';
import { COLORS, FONTS, hp, wp } from '../../assets/styles/styleGuide';

interface props {
  isVisible: boolean;
  onClose: Function;
}

const TableDetailModal: FC<props> = (props) => {
  const { isVisible, onClose = () => { } } = props

  const selectedTable = useBoard(boardStateSelectors.selectedTable)

  return (
    <Modal
      visible={isVisible}
      onRequestClose={() => onClose()}
      animationType='fade'
      transparent={true}
    >

      <TouchableOpacity
        activeOpacity={1}
        style={styles.main}
        onPress={() => onClose()}
      >
        <View style={styles.container}>

          <Text style={styles.txt1}>Customer Detail</Text>

          <Text style={styles.txt2}>Name: <Text style={styles.txt3}>Customer Name</Text></Text>
          <Text style={styles.txt2}>Client Type: <Text style={styles.txt3}>VIP</Text></Text>
          <Text style={styles.txt2}>Number of Guests: <Text style={styles.txt3}>2</Text></Text>
          <Text style={styles.txt2}>Special Dinner: <Text style={styles.txt3}>Birthday</Text></Text>

          <View style={styles.line}></View>

          <Text style={styles.txt1}>Menu</Text>
          <Text style={styles.txt2}>Special dishes: <Text style={styles.txt3}>None</Text></Text>
          <Text style={styles.txt2}>Preference: <Text style={styles.txt3}>Non Vegan</Text></Text>
          <Text style={styles.txt2}>Offert: <Text style={styles.txt3}>all</Text></Text>
          <Text style={styles.txt2}>Offert: <Text style={styles.txt3}>all</Text></Text>

          <View style={styles.line}></View>

          <Text style={styles.txt1}>Down Payment: <Text style={styles.txt3}>$100</Text></Text>

        </View>

      </TouchableOpacity>

    </Modal>
  )
}

export default TableDetailModal

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    backgroundColor: COLORS.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 10,
    padding: 20,
    minWidth: '50%',
    maxWidth: '70%'
  },
  txt1: {
    fontFamily: FONTS.POPPINS_600,
    color: COLORS.BLACK,
    fontSize: hp(2)
  },
  txt2: {
    fontFamily: FONTS.POPPINS_500,
    color: COLORS.BLACK,
    fontSize: hp(1.7)
  },
  txt3: {
    fontFamily: FONTS.POPPINS_400,
    color: COLORS.BLACK,
    fontSize: hp(1.5)
  },
  line: {
    width: wp(45),
    height: 1,
    backgroundColor: COLORS.GREY,
    marginVertical: hp(1.5),
    alignSelf: 'center'
  }
})