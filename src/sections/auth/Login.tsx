// next
import NextLink from 'next/link';
// @mui
import { Link, Stack, Typography } from '@mui/material';
// auth
// layouts
import LoginLayout from '../../layouts/login';
// routes
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h3" fontWeight={900} color="secondary.main">
          ĐĂNG NHẬP
        </Typography>

        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">Chưa có tài khoản ? </Typography>

          <Link component={NextLink} href="https://gdvietnam.com" variant="subtitle2">
            Đăng ký mới
          </Link>
        </Stack>
      </Stack>

      <AuthLoginForm />

      <AuthWithSocial />
    </LoginLayout>
  );
}
