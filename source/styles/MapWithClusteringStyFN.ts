import { StyleSheet } from "react-native";
import { defStyObjType } from "../types";
import { Size } from "../functions";

const MapWithClusteringStyFN = ({ col, font, }: defStyObjType) => StyleSheet.create({

    bubleSty: {
        height: 35,
        aspectRatio: 1,
        backgroundColor: col.BLACK,
        borderRadius: 100,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: col.BLACK,
        borderWidth: 1
    },
    bubleTxtSty: {
        fontFamily: font.BOLD,
        fontSize: Size(20),
        color: col.WHITE
    }

});
export default MapWithClusteringStyFN