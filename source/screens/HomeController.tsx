import { StyleSheet } from 'react-native'
import React from 'react'
import { ButtonX, MasterView, PressX } from '../components'
import { useThemeX } from '../hooks'
import { defStyObjType } from '../types'
import MapView from 'react-native-maps'

const HomeController = () => {

    const { defStyOBJ } = useThemeX();
    const sty = styFN(defStyOBJ);

    return <MapView>

    </MapView>
}

export default HomeController

const styFN = ({ }: defStyObjType) => StyleSheet.create({

})