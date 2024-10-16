import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';

export const navData = [
  {
    title: 'HOME',
    path: '/',
    icon: <ListIcon />,
  },
  {
    title: 'ABOUT US',
    path: '/add-task',
    icon: <AddIcon />,
  },
  {
    title: 'OUR BUSINESS',
    path: '/pending-tasks',
    icon: <MoreHorizIcon />,
  },
  {
    title: 'SUSTAINABILITY',
    path: '/completed-tasks',
    icon: <ChecklistOutlinedIcon />,
  },
  {
    title: 'CSR',
    path: '/completed-tasks',
    icon: <ChecklistOutlinedIcon />,
  },
  {
    title: 'CAREER',
    path: '/completed-tasks',
    icon: <ChecklistOutlinedIcon />,
  },
  {
    title: 'CONTACT',
    path: '/completed-tasks',
    icon: <ChecklistOutlinedIcon />,
  },
];
