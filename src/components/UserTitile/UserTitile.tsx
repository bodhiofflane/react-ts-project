import { LocalGithubUser } from 'types';
import styles from './UserTitile.module.scss';

interface UserTitileProps extends Pick<LocalGithubUser, 'name' | 'login' | 'created'> { }

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export const UserTitile = ({ name, login, created }: UserTitileProps) => {

  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={styles.userTitile}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  )
}