import { useState } from 'react';
// @mui
import { Divider, IconButton, List, MenuItem, Stack, Tooltip, Typography } from '@mui/material';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// components
import BadgeStatus from '../../../components/badge-status';
import { CustomAvatar } from '../../../components/custom-avatar';
import Iconify from '../../../components/iconify';
import MenuPopover from '../../../components/menu-popover';
import SettingsDrawer from '../../../components/settings/drawer';

// ----------------------------------------------------------------------

export default function ChatNavAccount() {
  const { user } = useAuthContext();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const [openSetting, setOpenSetting] = useState(false);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleOpenSetting = () => {
    setOpenSetting(true);
    setOpenPopover(null);
  };

  const handleCloseSetting = () => {
    setOpenSetting(false);
  };

  return (
    <>
      <CustomAvatar
        src={user?.photoURL}
        alt={user?.displayName}
        name={user?.displayName}
        BadgeProps={{
          badgeContent: <BadgeStatus status="online" />,
        }}
        onClick={handleOpenPopover}
        sx={{ cursor: 'pointer', width: 48, height: 48 }}
      />

      <MenuPopover open={openPopover} onClose={handleClosePopover} arrow="top-left" sx={{ p: 0 }}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 2, pr: 1, pl: 2.5 }}>
          <div>
            <Typography noWrap variant="subtitle2">
              {user?.displayName}
            </Typography>

            <Typography noWrap variant="body2" sx={{ color: 'text.secondary' }}>
              {user?.email}
            </Typography>
          </div>

          <Tooltip title="Đăng xuất">
            <IconButton color="error">
              <Iconify icon="ic:round-power-settings-new" />
            </IconButton>
          </Tooltip>
        </Stack>

        <Divider />

        <List sx={{ px: 1 }}>
          <MenuItem>
            <Iconify icon="ic:round-account-box" />
            Trang cá nhân
          </MenuItem>

          <MenuItem onClick={handleOpenSetting}>
            <Iconify icon="eva:settings-2-fill" />
            Cài đặt
          </MenuItem>

          <MenuItem>
            <Iconify icon="ri:logout-box-r-fill" />
            Đăng xuất
          </MenuItem>
        </List>
      </MenuPopover>

      <SettingsDrawer open={openSetting} handleClose={handleCloseSetting} />
    </>
  );
}
