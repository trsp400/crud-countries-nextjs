import Link from 'next/link'

export default function States() {
  return (
    <div id="container" style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <form id="form-wrapper" style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', width: 500, height: 500 }}>
        <input type="text" name="" id="" placeholder="Cidade" />
        <input type="text" name="" id="" placeholder="Estado" />

        <button onClick={() => alert('oiew')}>Salvar</button>
      </form>

      <Link href="/"><button>Voltar</button></Link>
    </div>
  );
}