import * as React from "react"
import './Icon.css'
const CommentIcon = ({ props }) => (
  <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 -960 960 960" 
  height="2em" 
  width="2em"
  {...props}>
    <path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320v-480 480Zm594 0 46 45v-525H160v480h594Z"/>
  </svg>
)
export default CommentIcon;