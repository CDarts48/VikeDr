import React, { useEffect } from 'react';
import './code.css';

const ContactSection = () => {
  useEffect(() => {
    // Initialize the map
    function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9.75,
        center: { lat: 39.9205, lng: -105.0867 },
        mapTypeId: "terrain",
      });
      // Define the LatLng coordinates for the polygon's path.
      const triangleCoords = [
        { lat: 40.1672, lng: -104.9366 },
        { lat: 39.7294, lng: -104.8319 },
        { lat: 39.6478, lng: -104.9878 },
        { lat: 39.6509, lng: -105.1874 },
        { lat: 40.1336, lng: -105.2763 },
      ];
      // Construct the polygon.
      const serviceArea = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      });

      serviceArea.setMap(map);
    }

    // Check if the Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Wait for the Google Maps API to load
      window.initMap = initMap;
    }
  }, []);

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-content">
        <div className="contact-map" id="map"></div>
        <div className="contact-info">
          <h2>Looking Forward to Hearing From You!</h2>
          <p>Topher's Maintenance and Repair</p>
          <p>Westminster, Colorado</p>
          <p>(720) 238-4082</p>
          <p>
            <a href="mailto:Chris@tophersmandr.com?subject=A Maintenance and Repair Request from">
              Chris@tophersmandr.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;