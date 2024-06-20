import { Metadata } from "next";
import CardVaga from "./components/CardVaga/CardVaga";

export default function Home({ searchParams}: {searchParams: { page: string}}) {
  return (
    <main className='flex flex-col items-center justify-center bg-gray-50'>
        {/* <Component/> */}
        <CardVaga searchParams={searchParams}/>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'VagaNet - Ínicio',
  description: 'Um projeto que reune pessoas que procuram pequenos serviços'
}