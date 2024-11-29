import React from 'react'
import { Paper, Typography, Box, Stack, IconButton, Grid2, Divider } from '@mui/material'
import { Message, Person, Mail, AccessAlarm, MessageTwoTone } from '@mui/icons-material'

const supportStats = [
    {
        icon: <Mail sx={{ fontSize: 32, color: '#94a3b8' }} />,
        count: 0,
        label: 'NEW SUPPORT ISSUES',
    },
    {
        icon: <Message sx={{ fontSize: 32, color: '#f97316' }} />,
        count: 1,
        label: 'SUPPORT ISSUES ASSIGNED TO ME',
    },
    {
        icon: <Mail sx={{ fontSize: 32, color: '#3b82f6' }} />,
        count: 1,
        label: 'OPEN SUPPORT ISSUES',
    },
]

export default function SupportIssues() {
    return (
        <Paper elevation={0} className="p-6 rounded-xl border border-gray-100 mt-6">
            <Grid2 container>
                <Grid2 size={4}>
                    <MessageTwoTone sx={{ font: 100, width: 100, height: 100, justifyItems: 'center' }} />
                </Grid2>
                <Grid2 size={8}>
                    {/* <Box
                // className="grid grid-cols-1 md:grid-cols-3 gap-6"
                > */}
                    <Stack direction='column'>
                        {supportStats.map((stat, index) => (
                            <Box key={index}
                            //  className="flex items-center justify-between"
                            >
                                <Grid2 size={12}>

                                    <Typography
                                    //  variant="h6" className="text-xl font-bold text-gray-700"
                                    >
                                        {stat.count}
                                    </Typography>

                                    <Divider variant="middle" />
                                </Grid2>
                                {/* <Box
                                // className="flex items-center"
                                > */}
                                <Grid2 size={6}>

                                    {stat.icon}
                                </Grid2>
                                <Grid2 size={6}>

                                    <Typography
                                    // variant="subtitle2"
                                    // className="ml-4 text-sm text-gray-500 font-medium"
                                    >
                                        {stat.label}
                                    </Typography>
                                </Grid2>
                                {/* </Box> */}
                            </Box>
                        ))}
                    </Stack>
                    {/* </Box> */}
                </Grid2>
            </Grid2>
        </Paper>
    )
}

