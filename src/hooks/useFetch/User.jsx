import React from 'react'
import useFetch from './useFetch'
import styles from './User.module.css'
const User = () => {
    const {userEmail,data, user, inputEmail} = useFetch('')
  return (
    <div className={styles.container}>
    <input
      type="email"
      value={userEmail}
      onChange={inputEmail}
      placeholder="Введите email"
      className={styles.input}
    />
    <button onClick={user} className={styles.button}>Найти пользователя</button>
    {data ? (
      <div className={styles.userInfo}>
        <h3 className={styles.title}>Информация о пользователе:</h3>
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Имя:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Телефон:</strong> {data.phone}</p>
        <ul className={styles.addressList}>
          <li><strong>Адрес:</strong> {data.address.street}</li>
          <li><strong>Город:</strong> {data.address.city}</li>
          <li><strong>Код:</strong> {data.address.zipcode}</li>
        </ul>
        <p><strong>Компания:</strong> {data.company.name}</p>
      </div>
    ) : (
      <p className={styles.message}>Пользователь не найден или введите email для поиска.</p>
    )}
  </div>
  )
}

export default User