//todo separate
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { ToolsPanel } from '../../../src';

const DemoBlock = styled(View)`
  display: inline-block;
  padding: 30px;
`;

const toolsList = [
  {
    id: 1,
    to: '/',
    icon: 'download-main',
    tooltip: {
      icon: 'download-main',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 2,
    to: '/',
    icon: 'sub-user',
    tooltip: {
      icon: 'sub-user',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 3,
    to: '/',
    icon: 'audio',
    tooltip: {
      icon: 'audio',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 4,
    to: '/',
    icon: 'services-main',
    tooltip: {
      icon: 'services-main',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 5,
    to: '/',
    icon: 'meetings',
    tooltip: {
      icon: 'meetings',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 6,
    to: '/',
    icon: 'did',
    tooltip: {
      icon: 'did',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 7,
    to: '/',
    icon: 'lock-open',
    tooltip: {
      icon: 'lock-open',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 8,
    to: '/',
    icon: 'invoices',
    tooltip: {
      icon: 'invoices',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 9,
    to: '/',
    icon: 'provisioning',
    tooltip: {
      icon: 'provisioning',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 10,
    to: '/',
    icon: 'account-management',
    tooltip: {
      icon: 'account-management',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 11,
    to: '/',
    icon: 'database',
    tooltip: {
      icon: 'database',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 12,
    to: '/',
    icon: 'channel-management',
    tooltip: {
      icon: 'channel-management',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  },
  {
    id: 13,
    to: '/',
    icon: 'sales-report',
    tooltip: {
      icon: 'sales-report',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    },
    active: true
  },
  {
    id: 14,
    to: '/',
    icon: 'create',
    tooltip: {
      icon: 'create',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  }, {
    id: 15,
    to: '/',
    icon: 'sales-search',
    tooltip: {
      icon: 'sales-search',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  }, {
    id: 16,
    to: '/',
    icon: 'customer-list',
    tooltip: {
      icon: 'customer-list',
      heading: 'My Services',
      text: 'You can set your services by clicking on this',
      to: "/home"
    }
  }]

const Buttons = () => (<ToolsPanel toolsList={toolsList} />)
export default Buttons;