import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MenuButton = styled(Button)(({ theme }) => ({
    // textTransform: "none",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "24px",
    paddingRight: "24px",
    color: "#1B1F33",
    '&:hover': {
    backgroundColor: "0000E0",
  },
}));
export default function Navigation() {
    return (
      <Stack spacing={1} direction="row" justifyContent="flex-end" style={{margin: '24px'}}>
        <MenuButton>About me</MenuButton>
        <MenuButton>Projects</MenuButton>
        <MenuButton>Contact</MenuButton>
      </Stack>
    );
  }