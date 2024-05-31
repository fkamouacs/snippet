'use client';
import React from 'react';
import { Nav } from '../components/nav';
import {
  LucideIcon,
  FileText,
  Home,
  Settings,
  PieChart,
  Tag,
  Palette,
} from 'lucide-react';
import { fileURLToPath } from 'url';

const navbarlinks = () => {
  const links = [
    {
      title: 'Home',
      icon: Home as LucideIcon,
      variant: 'ghost' as 'ghost',
    },
    {
      title: 'Quotes',
      icon: FileText as LucideIcon,
      variant: 'ghost' as 'ghost',
    },
    {
      title: 'Tags',
      icon: Tag as LucideIcon,
      variant: 'ghost' as 'ghost',
    },
    {
      title: 'Palette',
      icon: Palette as LucideIcon,
      variant: 'ghost' as 'ghost',
    },
    {
      title: 'Analytics',
      icon: PieChart as LucideIcon,
      variant: 'ghost' as 'ghost',
    },
    {
      title: 'Settings',
      icon: Settings as LucideIcon,
      variant: 'ghost' as 'ghost',
    },
  ];
  return <Nav isCollapsed={true} links={links} />;
};

export default navbarlinks;
