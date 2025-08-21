import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample locations
const locations = [
  { id: 1, name: "Central Park", lat: 40.7812, lng: -73.9665 },
  { id: 2, name: "Times Square", lat: 40.7580, lng: -73.9855 },
  { id: 3, name: "Brooklyn Bridge", lat: 40.7061, lng: -73.9969 },
];

export function EventMap() {
  // Replace with your Google Maps API key
  const apiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Locations</CardTitle>
        <CardDescription>View event venues on the map</CardDescription>
      </CardHeader>
      <CardContent>
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
            defaultZoom={12}
            style={{ height: "400px", width: "100%" }}
            mapId="YOUR_MAP_ID"
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
              />
            ))}
          </Map>
        </APIProvider>
      </CardContent>
    </Card>
  );
}