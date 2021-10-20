import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import LoadingPage from "./LoadingPage";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  version: "weekly",
  libraries: ["places"],
  region: "NG",
});

interface Props {
  height?: number | string;
  width?: number | string;
  style?: React.CSSProperties;
  onLoadSuccess?: (params: {
    mapRef: React.MutableRefObject<HTMLDivElement | null>;
  }) => void;
}

const Map: React.FC<Props> = ({ onLoadSuccess, style }) => {
  const [loaded, setLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loader
      .load()
      .then(() => {
        setLoaded(true);
        onLoadSuccess?.({ mapRef });
      })
      .catch(() => {
        toast.error("Map failed to load. Please try again later");
      });
  }, []);

  return loaded ? (
    <div id="map" ref={mapRef} style={style} />
  ) : (
    <LoadingPage rootProps={{ style }} />
  );
};

export default Map;
