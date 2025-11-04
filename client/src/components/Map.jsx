import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "../assets/features/tours/tour.module.css";
import "leaflet/dist/leaflet.css";

function Map({ tour }) {
  return (
    <div className="w-svw h-[608px] flex flex-col bg-zinc-700 my-2   justify-center relative">
      <div className="h-[608px] bg-green-400 w-11/12 rounded-lg">
        <MapContainer
          center={[
            tour.startLocation.coordinates[1],
            tour.startLocation.coordinates[0],
          ]}
          zoom={14}
          scrollWheelZoom={false}
          className={`${styles.map} my-2 w-full`}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className={`${styles.map}`}
          />
          {tour.locations.map((location) => {
            return (
              <Marker
                key={location._id}
                position={[location.coordinates[1], location.coordinates[0]]}
              >
                <Popup autoClose={false} autoPan={false} keepInView={true}>
                  {location.description}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
