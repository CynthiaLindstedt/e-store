import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { Forum } from '@mui/icons-material'

const boards = [
    {
        title: 'Clinical Trial',
        participants: 1,
        unreadChat: 1,
        borderColor: 'border-cyan-400',
    },
    {
        title: 'Product Users',
        participants: 1,
        unreadChat: 1,
        borderColor: 'border-indigo-400',
    },
    {
        title: 'Usability Testing',
        participants: 1,
        unreadChat: 0,
        borderColor: 'border-gray-400',
    },
]

export default function CommunityBoards() {
    return (
        <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {boards.map((board, index) => (
                <Paper
                    key={index}
                    elevation={0}
                    className={`p-6 rounded-xl border-l-4 ${board.borderColor} border border-gray-100`}
                >
                    <Box className="flex items-center mb-4">
                        <Forum sx={{ fontSize: 24, color: '#94a3b8' }} />
                        <Typography variant="subtitle1" className="ml-2 font-medium">
                            COMMUNITY BOARD
                        </Typography>
                    </Box>
                    <Typography variant="h6" className="mb-4">
                        {board.title}
                    </Typography>
                    <Box className="flex justify-between items-center">
                        <Box>
                            <Typography variant="body2" className="text-gray-500">
                                PARTICIPANTS ONLINE
                            </Typography>
                            <Typography variant="h6" className="font-bold">
                                {board.participants}
                            </Typography>
                        </Box>
                        {board.unreadChat > 0 && (
                            <Box>
                                <Typography variant="body2" className="text-gray-500">
                                    UNREAD CHAT
                                </Typography>
                                <Typography variant="h6" className="font-bold">
                                    {board.unreadChat}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Paper>
            ))}
        </Box>
    )
}

