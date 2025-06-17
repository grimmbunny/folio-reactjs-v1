import React from "react";
import DesignGallery from "./DesignGallery";
import { brandingImages } from "../assets/design/designImages";

export default function DesignBrandingPortfolio() {
  return <DesignGallery title="Design - Branding" images={brandingImages} />;
}
