import { View, Text } from 'react-native'
import React from 'react'
import useApi from './api'

const useUpload = () => {
    const { post } = useApi()

    const uploadImage = async (imageObj: any) => {
        return new Promise(async (resolve, reject) => {
            try {
                const formData = new FormData()
                formData.append(`image`,
                    { uri: imageObj.path, type: imageObj.mime, name: imageObj.mime.replace('/', '.') })

                const response = await post('/api/v1/imagenes/upload', formData as any,)

                if (response?.status == 200 && response.data?.success == true) {
                    resolve(true)
                } else {

                    resolve(response)
                }
            } catch (error) {
                resolve(false)
            }
        })

    }

    return {
        uploadImage
    }
}

export default useUpload