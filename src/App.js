import './App.css';
import { ShopItemFunc } from './components/ShopItemFunc';
import { ShopItemClass } from './components/ShopItemClass';
import { Calendar } from './components/Calendar';
import { ItemModel } from './models/ItemModel';

export function App() {
  const item1 = new ItemModel({
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  });

  const item2 = new ItemModel({
    brand: 'Cat of Chili',
    title: 'Sheldon coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 9999,
    currency: '₽'
  });

  return (
    <>
      <div className='task-title'>Func-based component</div>
      
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item1} />
        </div>
      </div>

      <div className='task-title'>Class-based component</div>
      
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass item={item2} />
        </div>
      </div>

      <div className='task-title'>Calendar</div>
      
      <Calendar date={new Date(2020, 10, 13)} />
    </>
  );
}
