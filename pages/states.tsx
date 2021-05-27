import { useCallback, useState } from 'react';
import axios from 'axios';

import Link from 'next/link';

export default function States() {
  const [state, setState] = useState('');
  const [initials, setInitials] = useState('');

  const handleClick = useCallback(
    async event => {
      event.preventDefault();
      const response = await axios.post('/api/states', { state, initials });
    },
    [state, initials],
  );

  return (
    <div
      id="container"
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={handleClick}
        id="form-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
          width: 500,
          height: 500,
        }}
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Estado"
          onChange={event => setState(event?.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Sigla"
          maxLength={2}
          onChange={event => setInitials(event?.target.value)}
        />

        <button type="submit">Salvar</button>
      </form>

      <Link href="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
}
