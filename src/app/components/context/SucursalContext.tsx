'use client'

import React, { createContext, useContext, useState } from 'react';
import { sucursales } from "@/app/components/data/sucursales.json";

interface sucursalType {
    id: string;
    name: string;
    adress: string;
    }

    const SucursalContext = createContext();
    
    export const SucursalProvider = ({ children }) => {
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState('');

  const seleccionarSucursal = (sucursal : string) => {
    setSucursalSeleccionada(sucursal);
  };

  return (
    <SucursalContext.Provider value={{ sucursalSeleccionada, seleccionarSucursal }}>
      {children}
    </SucursalContext.Provider>
  );
};

export const useSucursalContext = () => {
  return useContext(SucursalContext);
};