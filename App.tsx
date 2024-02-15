import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Root from './src/navigation/root';
import { boardStateSelectors, useBoard } from './src/states/board';
import { getItem } from './src/services/asyncStorage';
import { ASYNC_KEYS } from './src/assets/enums';

const App = () => {
  const settableSize = useBoard(boardStateSelectors.settableSize)

  useEffect(() => {
    getTableSize()
  }, [])


  const getTableSize = async () => {
    try {
      const res = await getItem(ASYNC_KEYS.TABLE_SIZE, null)
      if (res != null) {
        settableSize(res)
      }
    } catch (error) {

    }
  }

  return (
    <>
      <Root />
    </>
  )
}

export default App

const styles = StyleSheet.create({})