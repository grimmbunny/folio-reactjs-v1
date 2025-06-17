import React from "react";
import DesignGallery from "./DesignGallery";
import { slidesImages } from "../assets/design/designImages";

export default function DesignSlidesPortfolio() {
  return <DesignGallery title="Design - Slides" images={slidesImages} />;
}
