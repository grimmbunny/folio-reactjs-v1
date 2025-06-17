import React from "react";
import DesignGallery from "./DesignGallery";
import { diagramacaoImages } from "../assets/design/designImages";

export default function DesignDiagramacaoPortfolio() {
  return (
    <DesignGallery title="Design - Diagramação" images={diagramacaoImages} />
  );
}
