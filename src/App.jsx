// Components
import { Button } from './Components/Button';
import { Card } from './Components/Card';
// Styles
import './sass/App.scss';
// Icons
import { TiArrowLeftOutline } from 'react-icons/ti';
import { TiArrowRightOutline } from 'react-icons/ti';
// Hooks
import { useState } from 'react';

const App = () => {
  const [pokemonId, setPokemonId] = useState(1);

  function prevClick() {
    pokemonId === 1 ? setPokemonId(1) : setPokemonId(pokemonId - 1);
  }

  function nextClick() {
    setPokemonId(pokemonId + 1);
  }

  return (
    <>
      <div className="card_container">
        <Card />
      </div>
      <div className="buttons-container">
        <Button icon={<TiArrowLeftOutline />} handleClick={prevClick} />
        <Button icon={<TiArrowRightOutline />} handleClick={nextClick} />
      </div>
    </>
  );
};

export { App };
