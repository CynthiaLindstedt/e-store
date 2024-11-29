import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { LibraryBooks, School, Description } from '@mui/icons-material'

const stats = [
    {
        icon: <LibraryBooks sx={{ fontSize: 40, color: '#3b82f6' }} />,
        count: 6,
        label: 'PUBLISHED PRODUCTS',
    },
    {
        icon: <School sx={{ fontSize: 40, color: '#3b82f6' }} />,
        count: 5,
        label: 'PUBLISHED COURSES',
    },
    {
        icon: <Description sx={{ fontSize: 40, color: '#3b82f6' }} />,
        count: 5,
        label: 'PUBLISHED DOCUMENTS',
    },
]

export default function StatsCards() {
    return (
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <Paper
                    key={index}
                    elevation={0}
                    className="p-6 rounded-xl border border-gray-100"
                >
                    <Box className="flex items-center justify-between">
                        {stat.icon}
                        <Typography variant="h3" className="text-4xl font-bold text-gray-700">
                            {stat.count}
                        </Typography>
                    </Box>
                    <Typography
                        variant="subtitle2"
                        className="mt-2 text-sm text-gray-500 font-medium"
                    >
                        {stat.label}
                    </Typography>
                </Paper>
            ))}
        </Box>
    )
}

