import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './locationinfo'

const Map = ({ eventData,center,zoom }) => {
	const [locationInfo, setLocatioInfo] = useState(null)
	const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8){
        	return   <LocationMarker lat={ev.geometries[0].coordinates[1]} lng=
        	{ev.geometries[0].coordinates[0]} onClick={() => setLocatioInfo({
        		id: ev.id, title: ev.title 
        	})} />
        }
        return null
    })


        	return (
		<div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{keys : 
             'AIzaSyDJY9v2SN7XQOQIq4tik5t2UcSGmuqbMWA'}}
              defaultCenter = {center}
              defaultZoom = {zoom}
          >
        {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
		)
}

Map.defaultProps = {
	center: {
		lat: 27.2046,
		lng:  77.4977
	},
	zoom: 8
}

export default Map