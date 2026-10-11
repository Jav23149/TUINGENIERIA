import React from "react";
import { Image } from "@/components/ui/image";

/**
 * Collage de imágenes para el hero de páginas de servicio.
 * Muestra una imagen principal grande y dos secundarias debajo.
 * @param {Object} props
 * @param {string} props.main - URL de la imagen principal
 * @param {string} props.mainAlt - Alt de la imagen principal
 * @param {string} props.topLeft - URL de la imagen secundaria izquierda
 * @param {string} props.topLeftAlt - Alt de la imagen secundaria izquierda
 * @param {string} props.bottomRight - URL de la imagen secundaria derecha
 * @param {string} props.bottomRightAlt - Alt de la imagen secundaria derecha
 */
export default function HeroCollage({ main, mainAlt, topLeft, topLeftAlt, bottomRight, bottomRightAlt }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="col-span-2 overflow-hidden rounded-sm border border-border">
        <Image src={main} alt={mainAlt} className="h-56 w-full object-cover lg:h-64" fittingType="fill" />
      </div>
      <div className="overflow-hidden rounded-sm border border-border">
        <Image src={topLeft} alt={topLeftAlt} className="h-32 w-full object-cover lg:h-40" fittingType="fill" />
      </div>
      <div className="overflow-hidden rounded-sm border border-border">
        <Image src={bottomRight} alt={bottomRightAlt} className="h-32 w-full object-cover lg:h-40" fittingType="fill" />
      </div>
    </div>
  );
}