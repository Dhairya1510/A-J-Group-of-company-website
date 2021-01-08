import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: 'home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'About Us',
    path: 'about',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Services',
    path: 'Services',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'What We Do',
    path: '/whatwedo',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Automation',
        path: '/WhatWeDo',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Graphic Designing',
        path: '/wwd/graphic',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Photography',
        path: '/wwd/photo',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Software Solutions',
        path: '/wwd/software',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Features',
    path: 'Features',
    icon: <IoIcons.IoMdHelpCircle 
    />
  },
  {
    title: 'Team',
    path: 'Team',
    icon: <IoIcons.IoMdHelpCircle 
    />
  },
  {
    title: 'Support',
    path: 'Contact Us',
    icon: <IoIcons.IoMdHelpCircle 
    />
  }
];
