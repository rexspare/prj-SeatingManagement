import React, { FC } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, hp, wp } from '../../assets/styles/styleGuide';
import { boardStateSelectors, useBoard } from '../../states/board';
import { getChairStatus } from '../../utils/myUtils';
import { PrimaryButton } from '..';
import { BOOK_STATUS } from '../../assets/enums';

interface props {
  isVisible: boolean;
  onClose: Function;
}

const ChairStatusModal: FC<props> = (props) => {
  const { isVisible, onClose = () => { } } = props

  const selectedTable = useBoard(boardStateSelectors.selectedTable)
  const selectedChair = useBoard(boardStateSelectors.selectedChair)
  const tablesList = useBoard(boardStateSelectors.tablesList)
  const setTablesList = useBoard(boardStateSelectors.setTablesList)


  const status = (selectedChair && selectedTable?.chairs) ? selectedTable?.chairs[selectedChair]?.chairStatus : ""

  const handleChangeChairStatus = (newStatus: string) => {
    let TABLES = [...tablesList]
    const tableIndex = TABLES.findIndex((table: any) => table.id === selectedTable.id);

    // Check if the target table is found
    if (tableIndex !== -1) {
      // Find the index of the target chair in the chairs array of the target table
      const chairIndex = selectedChair

      // Check if the target chair is found
      if (chairIndex !== -1) {
        // Change the chair status to BOOK_STATUS.OCCUPIED
        TABLES[tableIndex].chairs[chairIndex].chairStatus = newStatus;


        const bookedChairs = TABLES[tableIndex].chairs?.filter((chair: any) => chair.chairStatus == BOOK_STATUS.BOOKED)
        const occupiedChairs = TABLES[tableIndex].chairs?.filter((chair: any) => chair.chairStatus == BOOK_STATUS.OCCUPIED)

        if (occupiedChairs?.length > 0) {
          TABLES[tableIndex].tableStatus = BOOK_STATUS.OCCUPIED
        } else if (bookedChairs?.length > 0) {
          TABLES[tableIndex].tableStatus = BOOK_STATUS.BOOKED
        }


        // Log the updated TABLES array
        setTablesList(TABLES)
        onClose()
      } else {
        console.error("Target chair not found.");
      }
    } else {
      console.error("Target table not found.");
    }
  }

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
          <Text style={styles.txt1}>Chair Status</Text>

          <Text style={styles.txt2}>Table: <Text style={styles.txt3}></Text></Text>
          <Text style={styles.txt2}>Chair #: <Text style={styles.txt3}>{selectedChair + 1}</Text></Text>
          <Text style={styles.txt2}>Status: <Text style={styles.txt3}>{selectedTable?.chairs && getChairStatus(selectedTable, selectedChair)}</Text></Text>

          <View style={styles.line}></View>

          <Text style={styles.txt1}>Change Status</Text>

          <View style={styles.btnContainer}>

            <PrimaryButton
              title='Booked'
              style={styles.btn}
              onPress={() => handleChangeChairStatus(BOOK_STATUS.BOOKED)}
              filled={status == BOOK_STATUS.BOOKED}
              icon={<></>}
            />

            <PrimaryButton
              title='Occupied'
              style={styles.btn}
              onPress={() => handleChangeChairStatus(BOOK_STATUS.OCCUPIED)}
              filled={status == BOOK_STATUS.OCCUPIED}
              icon={<></>}
            />

            <PrimaryButton
              title='Empty'
              style={styles.btn}
              onPress={() => handleChangeChairStatus(BOOK_STATUS.EMPTY)}
              filled={status == BOOK_STATUS.EMPTY}
              icon={<></>}
            />

          </View>

        </View>

      </TouchableOpacity>

    </Modal>
  )
}

export default ChairStatusModal

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
    minWidth: '30%',
    maxWidth: '40%'
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
    width: wp(25),
    height: 1,
    backgroundColor: COLORS.GREY,
    marginVertical: hp(1.5),
    alignSelf: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    height: 40,
  }
})