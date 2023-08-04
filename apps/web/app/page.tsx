import { gql } from '../data-access/graphq-client';
import styles from './page.module.css';


export default async function Index() {
  const { users } = await gql.GetUsers();

  return (
    <div className={styles.page}>
      {users.map((user) => (
        <div key={user.id}>Name: {user.name}</div>
      ))}
    </div>
  );
}
