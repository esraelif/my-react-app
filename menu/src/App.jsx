import Title from './Title'
import { useState } from 'react';
import menu from './data'
import Menu from './Menu';
import Categories from './Categories';


const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return;
    }
    // console.log(category)
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  console.log(allCategories)

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />

      </section>


    </main>
  )
}

export default App
