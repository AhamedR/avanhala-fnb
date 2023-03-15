import styles from '@/styles/menu.module.scss'
import menu from './menu.json'

const Items = () => {
  return (
    <>
      <ul className={styles.verities}>
        {
           menu.map(item => 
            <li key={item.title}>
              <a
                name={`#${item.title.replace(/ /g,'-')}`}
                href={`#${item.title.replace(/ /g,'-')}`}
              >{item.title}</a>
            </li>
          )
        }
      </ul>
      {
        menu.map(item => {
          const {items} = item
          return (
            <div id={`${item.title.replace(/ /g,'-')}`} key={item.title} className={styles.container}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <ul className={styles.allItems}>
                {
                  items.map(variation => 
                    <li key={variation.id} className={styles.item}>
                      <p className={styles.number}>{variation.id}</p>
                      <h3 className={styles.name}>{variation.name}</h3>
                      <p className={styles.description}>{variation.description}</p>
                      <p className={styles.price}>{variation.price}.00</p>
                    </li>
                  )
                }
              </ul>
            </div>
          )
        })
      }
    </>
  )
}

export default Items
