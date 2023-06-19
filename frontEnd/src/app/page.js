"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  const remover = (codigo) => {
    const id = { codigo: parseInt(codigo) }
    const idJson = JSON.stringify(id);

    try {
        fetch("http://localhost:3003/produtos", {
          method: "DELETE",
          headers: { 'content-type': 'application/json' },
          body: idJson
        })
        router.refresh();
    } catch (error) {
        console.log("Ocorreu um erro" + error)
    }
  }
  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.codigo}>
          <p>{produtos.titulo}</p>
        <p>{produtos.data_cadastro}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
          <img src={produtos.imagem} alt={produtos.titulo} />
          <Link href={`/produto/${produtos.codigo}`}>ver mais</Link>
          <button onClick={() => remover(produtos.codigo)}>excluir</button>
        </div>
      ))}
    </main>
  )
}