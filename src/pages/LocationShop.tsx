import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';

function LocationShop() {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const myMap = useRef<Map | null>(null);

    const markers = [
        { name: "Aguascalientes", coordinates: [-102.283, 21.8833], color: "red" },
        { name: "Baja California", coordinates: [-115.283, 32.647], color: "orange" },
        { name: "Baja California Sur", coordinates: [-110.301, 24.142], color: "yellow" },
        { name: "Campeche", coordinates: [-90.525, 19.845], color: "green" },
        { name: "Chiapas", coordinates: [-93.121, 16.75], color: "blue" },
        { name: "Chihuahua", coordinates: [-106.066, 28.635], color: "purple" },
        { name: "Coahuila", coordinates: [-100.973, 25.440], color: "cyan" },
        { name: "Colima", coordinates: [-103.66, 19.24], color: "magenta" },
        { name: "Durango", coordinates: [-104.656, 24.022], color: "brown" },
        { name: "Guanajuato", coordinates: [-101.256, 21.016], color: "teal" },
        { name: "Guerrero", coordinates: [-99.82, 17.58], color: "lime" },
        { name: "Hidalgo", coordinates: [-98.752, 20.088], color: "pink" },
        { name: "Jalisco", coordinates: [-103.391, 20.676], color: "olive" },
        { name: "Estado de México", coordinates: [-99.655, 19.313], color: "gray" },
        { name: "Michoacán", coordinates: [-101.593, 19.703], color: "navy" },
        { name: "Morelos", coordinates: [-99.186, 18.933], color: "violet" },
        { name: "Nayarit", coordinates: [-104.897, 21.754], color: "salmon" },
        { name: "Nuevo León", coordinates: [-100.299, 25.673], color: "sandybrown" },
        { name: "Oaxaca", coordinates: [-96.726, 17.074], color: "coral" },
        { name: "Puebla", coordinates: [-98.203, 19.038], color: "crimson" },
        { name: "Querétaro", coordinates: [-100.389, 20.588], color: "gold" },
        { name: "Quintana Roo", coordinates: [-87.465, 21.161], color: "khaki" },
        { name: "San Luis Potosí", coordinates: [-100.973, 22.156], color: "orchid" },
        { name: "Sinaloa", coordinates: [-107.392, 24.777], color: "lightsteelblue" },
        { name: "Sonora", coordinates: [-110.955, 29.071], color: "mediumseagreen" },
        { name: "Tabasco", coordinates: [-93.202, 17.99], color: "lightcoral" },
        { name: "Tamaulipas", coordinates: [-98.204, 23.730], color: "lightgoldenrodyellow" },
        { name: "Tlaxcala", coordinates: [-98.204, 19.315], color: "lavender" },
        { name: "Veracruz", coordinates: [-96.130, 19.173], color: "lightsalmon" },
        { name: "Yucatán", coordinates: [-89.152, 20.967], color: "lightcyan" },
        { name: "Zacatecas", coordinates: [-102.679, 22.770], color: "lightpink" },
    ];

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1Ijoiam9lbHlubWF6YSIsImEiOiJjbTJhazc3NmcwZ3FuMmtvcGVnbWo0aDYzIn0.h_VIg0smItAg4ItqczdqiA";
        
        if (mapContainer.current) {
            myMap.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/joelynmaza/cm2b5d04a000g01p4auxq2y0c",
                center: [-102.5528, 23.6345], // Centro de México
                zoom: 5,
            });

            // Agregar marcadores
            markers.forEach(marker => {
                const mapMarker = new mapboxgl.Marker({ color: marker.color })
                    .setLngLat(marker.coordinates)
                    .addTo(myMap.current)
                    .setPopup(new mapboxgl.Popup().setHTML(`<h1>${marker.name}</h1>`));
            });
        }

        return () => {
            if (myMap.current) {
                myMap.current.remove();
            }
        };
    }, []);

    return (
        <div ref={mapContainer} style={{ position: "absolute", top: "60px", bottom: 0, width: "100%" }}></div>
    );
}

export default LocationShop;
