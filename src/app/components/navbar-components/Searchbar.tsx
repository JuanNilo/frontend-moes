'use client'
import React, { useState } from 'react';
import { BsSearch, BsCart2 } from 'react-icons/bs';
import { Colors } from '@/app/extras/styles';
import { products } from "@/app/components/data/productos.json";

const { primary, secondary, tertiary } = Colors;

const productos = products

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredProductos, setFilteredProductos] = useState([]);

  const handleSearch = (input) => {
    const searchTerm = input.toLowerCase();
    const filtered = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm)
    );
    setFilteredProductos(filtered);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    handleSearch(event.target.value);
  };

  return (
      <section style={{ backgroundColor: tertiary }} className="rounded-full w-[35%] ml-4 md:ml-10 flex items-center">
        <input
          type="text"
          name=""
          id=""
          placeholder="Buscar productos..."
          style={{ backgroundColor: tertiary }}
          className="p-2 border-none rounded-full w-[90%] placeholder-gray-950 text-black font-bold"
          value={searchInput}
          onChange={handleInputChange}
        />
        <BsSearch className="text-black mx-auto" />
      </section>
  );
}