import CardVaga from "./components/CardVaga/CardVaga";
import Pagination from "./components/Pagination";
export default function Home({ searchParams}: {searchParams: { page: string}}) {
  return (
    <main className='flex flex-col items-center justify-center bg-slate-300'>
        <CardVaga searchParams={searchParams}/>
    </main>
  );
}
