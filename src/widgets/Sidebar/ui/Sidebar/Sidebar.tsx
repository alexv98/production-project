import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prevState => !prevState)
  }

  return (
    <div
      data-testid='sidebar'
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
    >
      <button
        data-testid='sidebar-toggle'
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
