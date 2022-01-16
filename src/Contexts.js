import React from 'react';
import { v1 as uuid } from 'uuid';

export const LinksContext = React.createContext([]);
export const PathContext = React.createContext(uuid());
export const ProfileContext = React.createContext();