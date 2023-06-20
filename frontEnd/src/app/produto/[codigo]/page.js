'use client'

import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const codigo= { codigo: parseInt(params.codigo)
     }

    const idJson = JSON.stringify(codigo);

    const req = await fetch("http://localhost:3003/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    <div className='produto'></div>
    return (
       
            <div>
            <p>{produto.titulo}</p>
           <p>{produto.data_cadastro}</p>
          <p>{produto.preco}</p>
          <p>{produto.descricao}</p>
          <img src={produto.imagem} alt={produto.titulo} />
           
        </div>

    )
}