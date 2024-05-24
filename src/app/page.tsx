import CardVaga from "./components/CardVaga/CardVaga";
import Pagination from "./components/Pagination";
export default function Home({ searchParams}: {searchParams: { page: string}}) {
  return (
    <main className='flex flex-col items-center justify-center bg-slate-300'>
        <Pagination itemCount={100} pageSize={10 }currentPage={parseInt(searchParams.page)}/>
        <CardVaga/>
    </main>
  );
}
