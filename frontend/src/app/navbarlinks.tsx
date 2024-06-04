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
  CircleUserRound,
  LogOut,
} from 'lucide-react';
import { fileURLToPath } from 'url';

const navbarlinks = () => {
  const links = [
    {
      title: 'Home',
      icon: Home as LucideIcon,
      variant: 'ghost' as 'ghost',
      link: '/',
    },
    {
      title: 'Quotes',
      label: '0',
      icon: FileText as LucideIcon,
      variant: 'ghost' as 'ghost',
      link: '/quotes',
    },
    {
      title: 'Tags',
      label: '0',
      icon: Tag as LucideIcon,
      variant: 'ghost' as 'ghost',
      link: '/tags',
    },
    {
      title: 'Themes',
      label: '0',
      icon: Palette as LucideIcon,
      variant: 'ghost' as 'ghost',
      link: '/themes',
    },
    {
      title: 'Analytics',
      icon: PieChart as LucideIcon,
      variant: 'ghost' as 'ghost',
      link: '/analytics',
    },
    {
      title: 'Settings',
      icon: Settings as LucideIcon,
      variant: 'ghost' as 'ghost',
      link: '/settings',
    },
  ];

  const user = {
    title: 'Logout',
    username: 'Guest',
    label: 'Guest',
    icon: LogOut as LucideIcon,
    variant: 'ghost' as 'ghost',
  };

  return <Nav isCollapsed={true} links={links} user={user} />;
};

export default navbarlinks;
