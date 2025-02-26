import styles from './social.links.module.css'

const SocialLinks = ({link,icon}) => {
  return (
 <a href={link}>
  <ion-icon name={icon}></ion-icon>
  </a>
  )
}

export default SocialLinks