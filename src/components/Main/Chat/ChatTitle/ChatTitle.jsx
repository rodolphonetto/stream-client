import React from 'react'
import PropTypes from 'prop-types'

import styles from './ChatTitle.module.scss'

const ChatTitle = props => {
  return <h4 className={styles.chatTitle}>{props.title}</h4>
}

ChatTitle.propTypes = {
  title: PropTypes.string
}

export default ChatTitle
