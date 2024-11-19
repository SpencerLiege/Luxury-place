'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import opencage from 'opencage-api-client';
import Spinner from './Spinner';
import pinIcon from '@/assets/images/pin.svg';

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

// Create a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: pinIcon.src, // Use Next.js image loader
  iconSize: [40, 40], // Adjust the size of the icon
  iconAnchor: [20, 40], // Anchor point of the icon (half width, full height)
});

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [geocodeError, setGeocodeError] = useState(false);

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const res = await opencage.geocode({
          key: process.env.NEXT_PUBLIC_OPENCAGE_API_KEY, // OpenCage API key
          q: `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`,
        });

        if (res.results.length === 0) {
          setGeocodeError(true);
          setLoading(false);
          return;
        }

        const { lat, lng } = res.results[0].geometry;

        setLat(lat);
        setLng(lng);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setGeocodeError(true);
        setLoading(false);
      }
    };

    fetchCoords();
  }, [property.location]);

  if (loading) return <Spinner loading={loading} />;

  if (geocodeError) {
    return <div className="text-xl">No location data found</div>;
  }

  return (
    <MapContainer center={[lat, lng]} zoom={15} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          {property.location.street}, {property.location.city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default PropertyMap;
