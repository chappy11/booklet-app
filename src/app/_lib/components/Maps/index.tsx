"use client"
import React, { useCallback, useState } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

export type LatLng = {
  lat: number
  lng: number
}

type Props = {
  latlng: LatLng
  onMarkerChange?: (val: LatLng) => void
  isDraggable: boolean
}
export default function Maps(props: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCDOR5rlHGncDoXtYK01Fxzs-IHjAR1cGg",
  })
  const { latlng, onMarkerChange } = props
  const [map, setMap] = useState(null)

  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(latlng)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  const onChangeMarker = useCallback((e: google.maps.MapMouseEvent) => {
    if (!onMarkerChange) {
      return
    }

    if (!e.latLng) {
      return
    }

    const payload: LatLng = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }

    console.log(payload)

    onMarkerChange(payload)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={latlng}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        position={latlng}
        draggable
        onDragEnd={(e) => onChangeMarker(e)}
      />
    </GoogleMap>
  ) : (
    <></>
  )
}
