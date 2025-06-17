import React from "react";
import DesignGallery from "./DesignGallery";
import { socialImages } from "../assets/design/designImages";

export default function DesignSocialPortfolio() {
  return <DesignGallery title="Design - Social" images={socialImages} />;
}
