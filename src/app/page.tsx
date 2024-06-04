import CardVaga from "./components/CardVaga/CardVaga";
import Component from "./components/CardVaga/Component";

export default function Home({ searchParams}: {searchParams: { page: string}}) {
  return (
    <main className='flex flex-col items-center justify-center bg-slate-300'>
        {/* <Component/> */}
        <CardVaga searchParams={searchParams}/>
    </main>
  );
}
