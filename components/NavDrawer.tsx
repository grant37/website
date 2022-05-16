import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';

const NavDrawer: React.FC<{
  isOpen: boolean;
  onClose: React.ReactEventHandler;
  items: {
    title: string;
    IconComponent: typeof SvgIcon;
    onClick: React.ReactEventHandler;
  }[];
}> = ({ isOpen, onClose, items }) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List sx={{ minWidth: 260 }}>
        {items.map(({ title, IconComponent, onClick }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton onClick={onClick}>
              <ListItemIcon>
                <IconComponent color='secondary' />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
