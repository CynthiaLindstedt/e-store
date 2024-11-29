'use client'

import React from 'react'
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Box } from '@mui/material'
import {
    Home,
    Inventory,
    Group,
    Help,
    Message,
    Feedback,
    People,
    AttachMoney,
    Assessment,
    Settings
} from '@mui/icons-material'
import Image from 'next/image'

const drawerWidth = 240

const menuItems = [
    { text: 'Dashboard', icon: <Home />, active: true },
    { text: 'Products', icon: <Inventory /> },
    { text: 'Engagement', icon: <Group /> },
    { text: 'Support issues', icon: <Message /> },
    { text: 'Feedback', icon: <Feedback /> },
    { text: 'Accounts', icon: <People /> },
    { text: 'Sales', icon: <AttachMoney /> },
    { text: 'Audit logs', icon: <Assessment /> },
    { text: 'General settings', icon: <Settings /> },
    { text: 'Help', icon: <Help /> },
]

export default function Menu({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '1px solid #eaeaea',
                    },
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Image
                        src="/placeholder.svg"
                        alt="Biometric Logo"
                        width={150}
                        height={40}
                        className="mb-8"
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, mt: 2 }}>
                        <Avatar sx={{ width: 56, height: 56 }}>WG</Avatar>
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                W. GRAY
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Owner administrator
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            key={item.text}
                            sx={{
                                backgroundColor: item.active ? '#f0f7ff' : 'transparent',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5',
                                },
                            }}
                        >
                            <ListItemIcon sx={{ color: item.active ? 'primary.main' : 'inherit' }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.text}
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontWeight: item.active ? 600 : 400,
                                        color: item.active ? 'primary.main' : 'inherit',
                                    },
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f8fafc' }}>
                {children}
            </Box>
        </Box>
    )
}

