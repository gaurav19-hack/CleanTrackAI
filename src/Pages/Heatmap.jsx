import Navbar from "../components/Navbar";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


function Heatmap() {
  return (
    <>
      <Navbar />

      <div style={{ height: "100vh", paddingTop: "90px" }}>
        <MapContainer
          center={[26.4499, 80.3319]}
          zoom={12}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <CircleMarker
            center={[26.4600, 80.3200]}
            radius={20}
          >
            <Popup>
              Govind Nagar<br />
              45 Complaints
            </Popup>
          </CircleMarker>

          <CircleMarker
            center={[26.4700, 80.3400]}
            radius={15}
          >
            <Popup>
              Kidwai Nagar<br />
              38 Complaints
            </Popup>
          </CircleMarker>

          <CircleMarker
            center={[26.4500, 80.3500]}
            radius={10}
          >
            <Popup>
              Swaroop Nagar<br />
              15 Complaints
            </Popup>
          </CircleMarker>

        </MapContainer>
      </div>
    </>
  );
}

export default Heatmap;