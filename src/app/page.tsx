import { Box } from '@mui/material'
import React from 'react'
import Menu from './components/menu'
import StatsCards from './components/stats-cards'
import SupportIssues from './components/support-issues'
import CommunityBoards from './components/community-boards'

export default function Dashboard() {
  return (
    <Menu>
      <StatsCards />
      <SupportIssues />
      <CommunityBoards />
    </Menu>
  )
}

