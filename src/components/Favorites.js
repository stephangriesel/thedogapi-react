import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import Sad from '../icons/Sad';
import Trash from '../icons/Trash';

function clearStorage() {
  localStorage.clear();
  window.location.reload(true);
}

const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <>
      <div className='text-center m-5'>
        <h1>Your Favorites</h1>
      </div>
      {favorites.length > 0 ?

        <div>
          <div className='text-center'>
            <Link onClick={clearStorage}>
              <button>
                <Trash />Clear All
              </button>
            </Link>
          </div>
          {favorites.map(dog => (
            <>
              <div key={dog.id} className='d-flex justify-content-center flex-column align-items-center m-5'>
                <img className="w-50" alt="dog" src={dog.image.url} />
                <p>{dog.name}</p>
              </div>
            </>
          ))}
        </div> : <div className='text-center'>You have not favorited any dogs yet <Sad /></div>
      }
    </>
  )
}

export default Favorites