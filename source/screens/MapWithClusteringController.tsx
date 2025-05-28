import React, { useCallback, useState } from 'react'
import { locationData } from '../utils';
import { Clusterer } from 'react-native-clusterer';
import { _HEIGHT, _WIDTH } from '../functions';
import { CURRENT_LOCATION_PIN_IMG, MARKER_PIN_IMG } from '../assets';
import MapView, { MapMarker, Marker } from 'react-native-maps';
import { TextX } from '../components';
import { useThemeX } from '../hooks';
import { MapWithClusteringStyFN } from '../styles';
import Supercluster from 'react-native-clusterer/lib/typescript/types';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const MapWithClusteringController = () => {

    const { defStyOBJ, col } = useThemeX();
    const sty = MapWithClusteringStyFN(defStyOBJ);

    const [region, setRegion] = useState({
        latitude: 22.3039,
        longitude: 70.8022,
        latitudeDelta: 0, longitudeDelta: 0
    });

    const renderItem = useCallback((item: Supercluster.PointOrClusterFeature<any, any>, index: number, arr: any) => {
        if (item?.id) return (<Marker
            key={index}
            coordinate={{
                latitude: item?.geometry?.coordinates[1],
                longitude: item?.geometry?.coordinates[0],
            }} >
            <Animated.View
                entering={FadeIn}
                exiting={FadeOut}
                style={sty.bubleSty}>
                <TextX text={item?.properties?.point_count} tSty={sty.bubleTxtSty} />
            </Animated.View>
        </Marker>)
        else return (<Marker
            title={item?.properties?.name}
            key={index}
            coordinate={{
                latitude: item?.geometry?.coordinates[1],
                longitude: item?.geometry?.coordinates[0],
            }}
            image={MARKER_PIN_IMG}
            zIndex={index} tracksViewChanges={false}
            style={{ zIndex: (1000) }}
        />)
    }, [region]);

    return <MapView
        style={{ flex: 1, height: _HEIGHT, width: _WIDTH }}
        onRegionChange={setRegion}
        loadingBackgroundColor={col.WHITE}
        loadingIndicatorColor={col.PRIMARY}
        showsCompass={false}
    >
        <Clusterer
            region={region}
            data={locationData}
            clusteringEnabled={true}
            mapDimensions={{ height: _HEIGHT, width: _WIDTH }}
            renderItem={renderItem}
        />
        <Marker
            coordinate={{ latitude: 22.3039, longitude: 70.8022, }}
            image={CURRENT_LOCATION_PIN_IMG}
        />
    </MapView>
}

export default MapWithClusteringController