import React from "react";
import { categories } from "@/config/categories";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="flex items-center space-x-8 whitespace-nowrap overflow-x-auto px-10 my-3 pb-4">
      {categories.map((item) => (
        <div className="flex items-center flex-col">
          <Image
            src={item.icon}
            width={25}
            height={25}
            alt={`${item.name}_logo`}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
